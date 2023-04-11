import React, { useContext, useLayoutEffect, useState } from "react";
import { ThemeContext } from "./theme";

const NullActionContext = React.createContext(null);

export function useAction(props: { obj, action }) {
  const obj = props.obj;
  if (!obj) {
      throw new Error(`No object provided for useAction hook`);
  }

  const action = typeof props.action === 'string' ? obj.cls_.getFeature(props.action) : props.action;

  if (!action) {
      throw new Error(`No action ${action} exists on object ${obj.cls_.name}`);
  }

  const context = useContext(action.context || NullActionContext)
  const enabled = action.enabled ? action.isEnabled(obj, context) : true;
  const available = action.available ? action.isAvailable(obj, context) : true;
  const primary = action.primary;
  const secondary = action.secondary;
  const [inProgress] = useProperty({ value: obj, property: action.inProgress })
  const label = action.labelFn ? action.labelFn.call(obj) : action.label;
  const update = useForceUpdate();

  const theme = useContext(ThemeContext);
  const View = typeof action.view === 'string' ? theme[action.view] :
      typeof action.view === 'function' ? action.view :
          theme["ActionButton"];

  let onClick = async () => {
      if ( action ) {
          await action.invoke(obj, context);
      }
  }

  useLayoutEffect(() => obj.sub('propertyChange', () => {
      const newLabel = action.labelFn ? action.labelFn.call(obj) : action.label;
      if (!Object.is(newLabel, label)) {
          update();
      }
  }), [obj, action]);

  useLayoutEffect(() => obj.sub('propertyChange', () => {
      const newEnabled = action.enabled ? action.isEnabled(obj, context) : true;
      const newAvailable = action.available ? action.isAvailable(obj, context) : true;
      if (!Object.is(newEnabled, enabled)) {
          update();
      } else if (!Object.is(newAvailable, available)) {
          update();
      }
  }), [obj, context, action, enabled, available]);

  return {
      enabled,
      available,
      onClick,
      primary,
      secondary,
      inProgress,
      label,
      View
  }
}

export function useProperty(props: { value, property }) {
  const obj = props.value;
  if (!obj) {
    throw new Error("No value provided for useProperty hook");
  }
  const property =
    typeof props.property === "string"
      ? obj.cls_.getFeature(props.property)
      : props.property;
  if (!property) {
    throw new Error(
      `No property ${props.property} on class ${obj.cls_.name}. Typo?`
    );
  }
  const value = property ? obj[property.name] : null;
  const mode = calcMode(obj, property);
  const update = useForceUpdate();

  useLayoutEffect(
    () =>
      obj.sub("propertyChange", property.name, () => {
        const newValue = property ? obj[property.name] : null;
        if (!Object.is(newValue, value)) {
          update();
        }
      }),
    [obj, property, value]
  );

  useLayoutEffect(
    () =>
      obj.sub("propertyChange", () => {
        const newMode = calcMode(obj, property);
        if (!Object.is(newMode, mode)) {
          update();
        }
      }),
    [obj, property, mode]
  );

  return [
    value,
    (newValue) => {
      if (!obj || !property) return;
      obj[property.name] = newValue;
    },
    mode,
    property,
  ];
}

function calcMode(obj, property) {
  if (!obj || !property) {
    return "read-write";
  }

  if (!property.visibility) {
    return "read-write";
  } else if (typeof property.visibility == "string") {
    return property.visibility;
  } else if (typeof property.visibility == "function") {
    let vis = property.visibility.call(obj);
    if (typeof vis != "string") {
      throw new Error(
        `Visibility function did not return a string ${property.visibility}`
      );
    }
    return vis;
  } else {
    throw new Error(
      `Visibility is invalid type ${typeof property.visibility} ${
        property.name
      } ${property.visibility}`
    );
  }
}

export function useForceUpdate() {
  const [v, setV] = useState({});
  return function () {
    setV({});
  };
}
