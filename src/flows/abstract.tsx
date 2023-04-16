import { createFoamClass } from "../foam-kit/model";

export const StepClass = createFoamClass({
  name: "StepClass",
  properties: [
    {
      name: "currentStep",
      type: "number",
      value: 0,
    },
    {
      name: "steps",
      type: "array",
      value: [],
    },
  ],
  methods: [
    {
      name: "nextStep",
      code: function () {
        if (this.currentStep < this.steps.length - 1) {
          this.currentStep = this.currentStep + 1;
        }
      },
    },
    {
      name: "previousStep",
      code: function () {
        if (this.currentStep > 1) {
          this.currentStep = this.currentStep - 1;
        }
      },
    },
  ],
  actions: [],
});

export const UnitClass = createFoamClass({
  name: "UnitClass",
  properties: [
    {
      name: "health",
      type: "number",
      value: 0,
    },
    {
      name: "block",
      type: "number",
      value: 0,
    },
    {
      name: "poison",
      type: "number",
      value: 0,
    },
    {
      name: "wound",
      type: "number",
      value: 0,
    },
    {
      name: "isDead",
      type: "boolean",
      value: false,
    },
  ],
  methods: [
    {
      name: "doDamage",
      code: function (amount, pierce = false) {
        if (this.block > 0 && !pierce) {
          if (this.block > amount) {
            this.block = this.block - amount;
            return;
          } else if (this.block < amount) {
            const remaining = amount - this.block;
            this.block = 0;
            this.reduceHealth(remaining);
          }
        } else {
          this.reduceHealth(amount);
        }
      },
    },
    {
      name: "reduceHealth",
      code: function (amount) {
        if (this.health > amount) {
          this.health = this.health - amount;
        } else {
          this.health = 0;
          this.isDead = true;
        }
      },
    },
  ],
  actions: [],
});
