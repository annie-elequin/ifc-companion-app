import { PubSub } from "./PubSub";
import { Type, Types } from "./types";
import { labelize, constantize } from "./util";

export const nextUID = (() => {
  let uid_ = 1;
  return () => {
    let ret = uid_;
    uid_++;
    return ret;
  };
})();

abstract class BaseObject extends PubSub {
  private instance_ = {};
  private private_ = {};
  public cls_: Class;
  public readonly uid_: number = nextUID();

  constructor(args, cls) {
    super();
    this.cls_ = cls;
    this.initArgs(args);
  }

  copyFrom(args) {
    this.initArgs(args);
  }

  initArgs(args) {
    for (let key in args) {
      let f = this.cls_.getFeature(key);
      if (f && f instanceof Property) {
        this[key] = args[key];
      }
    }
  }

  hasOwnProperty(name) {
    return this.instance_[name] !== undefined;
  }

  clone() {
    return new this.cls_.cls(this);
  }

  equals(other) {
    return this.compareTo(other) == 0;
  }

  compareTo(other) {
    if (Object.is(this, other)) return 0;

    for (let axiom of this.cls_.features()) {
      if (!(axiom instanceof Property)) continue;

      let r = axiom.compare(this, other);
      if (r != 0) return r;
    }

    return 0;
  }
}

class Class {
  public cls;
  public prototype;
  private features_ = {};
  private featureCache_;
  private ownFeatureCache_;
  public name: string;
  public inherits: any;
  public model: Model;

  constructor({ name = "AnonymousClass", inherits = BaseObject, model }) {
    this.name = name;
    this.inherits = inherits;
    this.model = model;
    let classDescription = this;

    this.cls = class extends this.inherits {
      constructor(args, opt_classDescription?) {
        super(args, opt_classDescription || classDescription);
      }

      static cls_ = classDescription;
    };

    this.prototype = this.cls.prototype;
  }

  public getSuperClass() {
    return this.inherits;
  }

  public installFeature(feature) {
    if (!feature.name) {
      console.error("Cannot install a feature with no name");
    }
    if (Object.prototype.hasOwnProperty.call(this.features_, feature.name)) {
      console.warn("Already have feature named: ", feature.name);
      return;
    }
    feature.install(this);
    this.features_[feature.name] = feature;
    this.featureCache_ = undefined;
  }

  public getFeature(name) {
    return this.features_[name] ?? this.inherits?.cls_?.getFeature(name);
  }

  public isInstance(obj) {
    return obj instanceof this.cls;
  }

  public ownFeatures() {
    if (!this.ownFeatureCache_) {
      this.ownFeatureCache_ = [];
      for (let key in this.features_)
        this.ownFeatureCache_.push(this.features_[key]);
    }
    return this.ownFeatureCache_;
  }

  public features() {
    if (this.featureCache_) {
      return this.featureCache_;
    }

    let features = new Map();

    let parentFeatures = this.inherits?.cls_?.features?.() || [];

    for (let feature of parentFeatures) {
      features.set(feature.name, feature);
    }

    for (let feature of this.ownFeatures()) {
      features.set(feature.name, feature);
    }

    this.featureCache_ = Array.from(features.values());

    return this.featureCache_;
  }
}

class Property {
  public name: string;
  public label: string;
  public value: any;
  public factory: () => any;
  public view: string | Function;
  public type: Type;
  public visibility: string;
  public options: Array<any>;
  public hidden: boolean;
  public expression: {
    dependencies: string[];
    expression: (...args: any[]) => any;
  };

  constructor({
    name,
    label = undefined,
    value = undefined,
    factory = undefined,
    type = "any",
    view = undefined,
    visibility = "read-write",
    options = undefined,
    hidden = false,
    expression = undefined,
  }) {
    this.name = name;
    this.type = Types[type];
    this.label = label !== undefined ? label : labelize(name);
    this.value = value !== undefined ? value : this.type.defaultValue;
    this.factory = factory !== undefined ? factory : this.type.defaultFactory;
    this.expression = expression;

    if (this.factory && this.expression) {
      console.warn(
        "Warning expression and factory specified for property",
        name,
        "expression overrides factory in a Property"
      );
    }

    this.view = view !== undefined ? view : this.type.defaultView;
    this.visibility = visibility;
    this.options = options;
    this.hidden = hidden;
  }

  expressionFactory({ dependencies, expression }) {
    let name = this.name;

    return function () {
      let subs = [];

      const subToDependencies = function () {
        let unsub = () => {
          subs.forEach((sub) => sub());
          subs = [];
        };

        let listener = () => {
          unsub();
          if (this.instance_[name] === undefined) {
            this.private_[name] = undefined;
            this.pub("propertyChange", name, this);
          }
        };

        subs = dependencies.map((dep) =>
          this.sub("propertyChange", dep, listener)
        );
      };

      let v = expression.call(this, ...dependencies.map((dep) => this[dep]));
      subToDependencies.call(this);
      return v;
    };
  }

  install(cls) {
    const name = this.name;
    const constant = constantize(this.name);
    const value = this.value;
    const factory = this.factory;
    const expression = this.expression;
    const expressionFactory = expression
      ? this.expressionFactory(expression)
      : undefined;

    Object.defineProperty(cls.prototype, constant, {
      enumerable: false,
      value: this,
      writable: false,
    });

    Object.defineProperty(cls.prototype, name, {
      enumerable: true,
      get:
        expressionFactory !== undefined
          ? function () {
              if (this.instance_[name] !== undefined)
                return this.instance_[name];

              if (this.private_[name] !== undefined) return this.private_[name];

              return (this.private_[name] = expressionFactory.call(this));
            }
          : factory !== undefined
          ? function () {
              if (this.instance_[name] !== undefined)
                return this.instance_[name];

              let v = factory.call(this);
              if (v !== undefined) {
                console.error("Factory returned undefined");
              }
              this[name] = v;
              return v;
            }
          : value !== undefined
          ? function () {
              return this.instance_[name] !== undefined
                ? this.instance_[name]
                : value;
            }
          : function () {
              return this.instance_[name];
            },
      set: function (v) {
        let oldValue =
          this.private_[name] !== undefined
            ? this.private_[name]
            : this.instance_[name];

        this.instance_[name] = v;
        this.private_ = v;
        if ((!factory || oldValue !== undefined) && !Object.is(oldValue, v)) {
          this.pub("propertyChange", name, this);
        }
      },
    });
  }
}

class Method {
  public name: string;
  public code: Function;
  constructor({ name, code }) {
    this.name = name;
    this.code = code;
  }

  install(cls) {
    Object.defineProperty(cls.prototype, this.name, {
      writable: false,
      enumerable: false,
      value: this.code,
    });
  }
}

class Action {
  public name: string;
  public label: string;
  public available: () => boolean;
  public enabled: () => boolean;
  public code: Function;
  public primary: boolean;
  public secondary: boolean;
  public methodCode: Function;
  public method: Method;

  public inProgress: Property;

  constructor({
    name,
    label = undefined,
    code = undefined,
    available = undefined,
    enabled = undefined,
    primary = true,
    secondary = false,
  }) {
    this.name = name;
    this.label = label !== undefined ? label : labelize(name);
    this.available = available;
    this.enabled = enabled;
    this.primary = primary;
    this.secondary = secondary;
    this.code = code;

    this.inProgress = new Property({
      name: this.name + "_inProgress",
      type: "boolean",
      hidden: true,
      value: false,
    });

    this.methodCode = this.buildCode();

    this.method = new Method({
      name: this.name,
      code: this.methodCode,
    });
  }

  buildCode() {
    let inProgress = this.inProgress.name;
    let name = this.name;
    let code = this.code;
    let action = this;

    return async function (context) {
      if (this[inProgress] || !action.isEnabled(this, context)) return;

      this[inProgress] = true;

      try {
        console.debug("invoking action", name, "on", this.cls_?.name);
        await code.call(this, context);
        console.debug("success for action", name, "on", this.cls_?.name);
      } catch (e) {
        console.error("error in action", name, "on", this.cls_?.name, e);
      } finally {
        this[inProgress] = false;
      }
    };
  }

  install(cls) {
    this.method.install(cls);
    cls.installFeature(this.inProgress);
  }

  isEnabled(obj, context) {
    return (
      !obj[this.inProgress.name] &&
      (!this.enabled || this.enabled.call(obj, context))
    );
  }

  isAvailable(obj, context) {
    return !this.available || this.available.call(obj, context);
  }

  invoke(obj, context) {
    return obj[this.name](context);
  }
}

class Model {
  public name: string;
  public properties: Array<Property>;
  public methods: Array<Method>;
  public actions: Array<Action>;
  public inherits: any;

  constructor({
    name,
    properties = [],
    methods = [],
    actions = [],
    inherits = BaseObject,
  }) {
    this.name = name;
    this.inherits = inherits;
    this.properties = properties.map(p => 
      p instanceof Property ? p : new Property(p)  
    )
    this.methods = methods.map(m =>
      m instanceof Method ? m : new Method(m)  
    )
    this.actions = actions.map(a => 
      a instanceof Action ? a : new Action(a)
    )
  }

  public buildClass() {
    const cls = new Class({
      name: this.name,
      inherits: this.inherits,
      model: this,
    });

    for (let feature of this.features()) {
      cls.installFeature(feature);
    }

    return cls;
  }

  public features() {
    let ret = [];

    for (let type of ["properties", "methods", "actions"]) {
      if (!this[type]) continue;

      for (let feature of this[type]) ret.push(feature);
    }

    return ret;
  }
}

export function createFoamClass(model) {
  if (!(model instanceof Model)) model = new Model(model);

  return model.buildClass().cls;
}
