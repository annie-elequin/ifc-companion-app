import { createFoamClass } from "../foam-kit/model";
import { GainClass } from "./abstract";

export const DamageGainClass = createFoamClass({
    name: "DamageGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "octagram",
      },
      {
        name: "color",
        type: "string",
        value: "#8B0000",
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters) {
          const amount = this.amount;

          // Damage the units!
          const damageUnit = function (unit) {
            if (unit.isSelected) {
              unit.doDamage(amount)
            }
          }

          mercenaries.forEach(m => damageUnit(m))
          monsters.forEach(m => damageUnit(m))
        },
      }
    ],
    actions: [],
})

export const PierceGainClass = createFoamClass({
    name: "PierceGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "bow-arrow",
      },
      {
        name: "color",
        type: "string",
        value: "#964B00",
      },
    ],
    actions: [],
})

export const BlockGainClass = createFoamClass({
    name: "BlockGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "shield",
      },
      {
        name: "color",
        type: "string",
        value: "#333BFF",
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters) {
          const amount = this.amount;

          // Increase block on the units!
          const increaseBlock = function (unit) {
            if (unit.isSelected) {
              unit.increaseBlock(amount)
            }
          }

          mercenaries.forEach(m => increaseBlock(m))
          monsters.forEach(m => increaseBlock(m))
        },
      }
    ],
    actions: [],
})

export const WoundGainClass = createFoamClass({
    name: "WoundGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "account-injury",
      },
      {
        name: "color",
        type: "string",
        value: "#5C4033",
      },
    ],
    actions: [],
})

export const FlexGainClass = createFoamClass({
    name: "FlexGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "arm-flex",
      },
      {
        name: "color",
        type: "string",
        value: "#fff64a",
      },
    ],
    actions: [],
})

export const PoisonGainClass = createFoamClass({
    name: "PoisonGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "bottle-tonic-skull",
      },
      {
        name: "color",
        type: "string",
        value: "#008000",
      },
    ],
    actions: [],
})

export const PinGainClass = createFoamClass({
    name: "PinGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "anchor",
      },
      {
        name: "color",
        type: "string",
        value: "#5A5A5A",
      },
    ],
    actions: [],
})


export const DisarmGainClass = createFoamClass({
  name: "DisarmGainClass",
  inherits: GainClass,
  properties: [
    {
      name: "icon",
      type: "string",
      value: "hand-back-left-off",
    },
    {
      name: "color",
      type: "string",
      value: "#00003f",
    },
  ],
  actions: [],
})

export const PainGainClass = createFoamClass({
  name: "PainGainClass",
  inherits: GainClass,
  properties: [
    {
      name: "icon",
      type: "string",
      value: "star-three-points",
    },
    {
      name: "color",
      type: "string",
      value: "#080a0a",
    },
  ],
  actions: [],
})