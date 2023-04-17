export class Type {
  public name: string;
  public defaultView: string;
  public defaultValue: string;
  public defaultFactory: () => any;
  public defaultComparator: (a, b) => number;

  constructor({
    name,
    defaultView = "SimpleView",
    defaultValue = undefined,
    defaultFactory = undefined,
    defaultComparator = undefined,
  }) {
    this.name = name;
    this.defaultView = defaultView;
    this.defaultValue = defaultValue;
    this.defaultFactory = defaultFactory;
    this.defaultComparator = defaultComparator;
  }
}

export let Types = {
  any: new Type({
    name: "any",
    defaultValue: null,
    defaultComparator: (a, b) => 0,
  }),
  boolean: new Type({
      name: 'boolean',
      defaultValue: false,
  }),
  number: new Type({
      name: 'number',
      defaultValue: 0,
  }),
  array: new Type({
      name: 'array',
      defaultValue: []
  }),
  string: new Type({
      name: 'string',
      defaultValue: undefined,
  }),
  image: new Type({
      name: 'image',
      defaultValue: null,
  })
};
