import { createFoamClass } from "../foam-kit/model";
import { GainClass } from "./Abstract/GainClass";

export const HealthGainClass = createFoamClass({
  name: "HealthGainClass",
  inherits: GainClass,
  properties: [
    {
      name: 'label',
      type: 'string',
      value: 'health',
    },
    {
      name: "icon",
      type: "image",
      value: require("../assets/combat/gains/health.png"),
    },
    {
      name: 'showOnUnit',
      type: 'boolean',
      value: false,
    }
  ],
})

export const DamageGainClass = createFoamClass({
    name: "DamageGainClass",
    inherits: GainClass,
    properties: [
      {
        name: 'label',
        type: 'string',
        value: 'damage',
      },
      {
        name: "icon",
        type: "image",
        value: require("../assets/combat/gains/damage.png"),
      },
      {
        name: 'showOnUnit',
        type: 'boolean',
        value: false,
      }
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters, id = undefined) {
          const amount = this.amount;

          // Damage the units!
          const damageUnit = function (unit) {
            if (unit.isSelected || unit.id === id) {
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
        name: 'label',
        type: 'string',
        value: 'pierce',
      },
      {
        name: "icon",
        type: "image",
        value: require("../assets/icons/pierce.png"),
      },
      {
        name: 'showOnUnit',
        type: 'boolean',
        value: false,
      }
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters, id = undefined) {

          // Pierce damage the units!
          const damageUnit = function (unit) {
            if (unit.isSelected || unit.id === id) {
              unit.modifyGain('block', -this.amount)
              unit.doDamage(this.amount, true)
            }
          }

          mercenaries.forEach(m => damageUnit(m))
          monsters.forEach(m => damageUnit(m))
        },
      }
    ],
    actions: [],
})

export const BlockGainClass = createFoamClass({
    name: "BlockGainClass",
    inherits: GainClass,
    properties: [
      {
        name: 'label',
        type: 'string',
        value: 'block',
      },
      {
        name: "icon",
        type: "image",
        value: require("../assets/combat/gains/block.png"),
      },
    ],
})

export const WoundGainClass = createFoamClass({
    name: "WoundGainClass",
    inherits: GainClass,
    properties: [
      {
        name: 'label',
        type: 'string',
        value: 'wound',
      },
      {
        name: "icon",
        type: "image",
        value: require("../assets/icons/wound.png"),
      },
    ],
})

export const PoisonGainClass = createFoamClass({
    name: "PoisonGainClass",
    inherits: GainClass,
    properties: [
      {
        name: 'label',
        type: 'string',
        value: 'poison',
      },
      {
        name: "icon",
        type: "image",
        value: require("../assets/icons/poison.png"),
      },
    ],
})

export const PinGainClass = createFoamClass({
    name: "PinGainClass",
    inherits: GainClass,
    properties: [
      {
        name: 'label',
        type: 'string',
        value: 'pin',
      },
      {
        name: "icon",
        type: "image",
        value: require("../assets/icons/pin.png"),
      },
    ],
})


export const DisarmGainClass = createFoamClass({
  name: "DisarmGainClass",
  inherits: GainClass,
  properties: [
    {
      name: 'label',
      type: 'string',
      value: 'disarm',
    },
    {
      name: "icon",
      type: "image",
      value: require("../assets/icons/disarm.png"),
    },
  ],
})

export const PainGainClass = createFoamClass({
  name: "PainGainClass",
  inherits: GainClass,
  properties: [
    {
      name: 'label',
      type: 'string',
      value: 'pain',
    },
    {
      name: "icon",
      type: "image",
      value: require("../assets/combat/gains/disarm.png"),
    },
  ],
})

export const BlindGainClass = createFoamClass({
  name: "BlindGainClass",
  inherits: GainClass,
  properties: [
    {
      name: 'label',
      type: 'string',
      value: 'blind',
    },
    {
      name: "icon",
      type: "image",
      value: require("../assets/combat/gains/blind.png"),
    },
  ],
})