import { createFoamClass } from "../foam-kit/model";
import { GainClass } from "./Abstract/GainClass";

export const HealthGainClass = createFoamClass({
  name: "HealthGainClass",
  inherits: GainClass,
  properties: [
    {
      name: 'name',
      type: 'string',
      value: 'health',
    },
    {
      name: "icon",
      type: "image",
      value: require("../assets/combat/gains/health.png"),
    },
  ],
  methods: [
    {
      name: "applyGainToUnits",
      code: function (mercenaries, monsters, id = undefined) {
        const amount = this.amount;

        const modifyHealth = function (unit) {
          if (unit.isSelected || unit.id === id) {
            // unit.increaseHealth(amount)
            unit.modifyGain('health', amount)
          }
        }

        mercenaries.forEach(m => modifyHealth(m))
        monsters.forEach(m => modifyHealth(m))
      },
    }
  ],
  actions: [],
})

export const DamageGainClass = createFoamClass({
    name: "DamageGainClass",
    inherits: GainClass,
    properties: [
      {
        name: 'name',
        type: 'string',
        value: 'damage',
      },
      {
        name: "icon",
        type: "image",
        value: require("../assets/combat/gains/damage.png"),
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters, id = undefined) {
          const amount = this.amount;

          // Damage the units!
          const damageUnit = function (unit) {
            console.log('zzz', {uid: unit.id, id})
            console.log('zzz', typeof unit.id, typeof id)
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
        name: 'name',
        type: 'string',
        value: 'pierce',
      },
      {
        name: "icon",
        type: "image",
        value: require("../assets/icons/pierce.png"),
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters, id = undefined) {
          const amount = this.amount;

          // Pierce damage the units!
          const damageUnit = function (unit) {
            if (unit.isSelected || unit.id === id) {
              unit.decreaseBlock(amount)
              unit.doDamage(amount, true)
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
        name: 'name',
        type: 'string',
        value: 'block',
      },
      {
        name: "icon",
        type: "image",
        value: require("../assets/combat/gains/block.png"),
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters, id = undefined) {
          const amount = this.amount;

          // Increase block on the units!
          const increaseBlock = function (unit) {
            if (unit.isSelected || unit.id === id) {
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
        name: 'name',
        type: 'string',
        value: 'wound',
      },
      {
        name: "icon",
        type: "image",
        value: require("../assets/icons/wound.png"),
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters, id = undefined) {
          const amount = this.amount;

          // Increase wound on the units!
          const increaseWound = function (unit) {
            if (unit.isSelected || unit.id === id) {
              unit.increaseWound(amount)
            }
          }

          mercenaries.forEach(m => increaseWound(m))
          monsters.forEach(m => increaseWound(m))
        },
      }
    ],
    actions: [],
})

export const FlexGainClass = createFoamClass({
    name: "FlexGainClass",
    inherits: GainClass,
    properties: [
      {
        name: 'name',
        type: 'string',
        value: 'flex',
      },
      {
        name: "icon",
        type: "image",
        value: require("../assets/combat/gains/disarm.png"),
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters, id = undefined) {
          const amount = this.amount;

          // Add flex to the units!
          const increaseFlex = function (unit) {
            if (unit.isSelected || unit.id === id) {
              unit.increaseFlex(amount)
            }
          }

          mercenaries.forEach(m => increaseFlex(m))
          monsters.forEach(m => increaseFlex(m))
        },
      }
    ],
    actions: [],
})

export const PoisonGainClass = createFoamClass({
    name: "PoisonGainClass",
    inherits: GainClass,
    properties: [
      {
        name: 'name',
        type: 'string',
        value: 'poison',
      },
      {
        name: "icon",
        type: "image",
        value: require("../assets/icons/poison.png"),
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters, id = undefined) {
          const amount = this.amount;

          // Add poison to the units!
          const increasePoison = function (unit) {
            if (unit.isSelected || unit.id === id) {
              unit.increasePoison(amount)
            }
          }

          mercenaries.forEach(m => increasePoison(m))
          monsters.forEach(m => increasePoison(m))
        },
      }
    ],
    actions: [],
})

export const PinGainClass = createFoamClass({
    name: "PinGainClass",
    inherits: GainClass,
    properties: [
      {
        name: 'name',
        type: 'string',
        value: 'pin',
      },
      {
        name: "icon",
        type: "image",
        value: require("../assets/icons/pin.png"),
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters, id = undefined) {
          const amount = this.amount;

          // Add pin to the units!
          const increasePin = function (unit) {
            if (unit.isSelected || unit.id === id) {
              unit.increasePin(amount)
            }
          }

          mercenaries.forEach(m => increasePin(m))
          monsters.forEach(m => increasePin(m))
        },
      }
    ],
    actions: [],
})


export const DisarmGainClass = createFoamClass({
  name: "DisarmGainClass",
  inherits: GainClass,
  properties: [
    {
      name: 'name',
      type: 'string',
      value: 'disarm',
    },
    {
      name: "icon",
      type: "image",
      value: require("../assets/icons/disarm.png"),
    },
  ],
  methods: [
    {
      name: "applyGainToUnits",
      code: function (mercenaries, monsters, id = undefined) {
        const amount = this.amount;

        // Add disarm to the units!
        const increaseDisarm = function (unit) {
          if (unit.isSelected || unit.id === id) {
            unit.increaseDisarm(amount)
          }
        }

        mercenaries.forEach(m => increaseDisarm(m))
        monsters.forEach(m => increaseDisarm(m))
      },
    }
  ],
  actions: [],
})

export const PainGainClass = createFoamClass({
  name: "PainGainClass",
  inherits: GainClass,
  properties: [
    {
      name: 'name',
      type: 'string',
      value: 'pain',
    },
    {
      name: "icon",
      type: "image",
      value: require("../assets/combat/gains/disarm.png"),
    },
  ],
  methods: [
    {
      name: "applyGainToUnits",
      code: function (mercenaries, monsters, id = undefined) {
        const amount = this.amount;

        // Add pain to the units!
        const increasePain = function (unit) {
          if (unit.isSelected || unit.id === id) {
            unit.increasePain(amount)
          }
        }

        mercenaries.forEach(m => increasePain(m))
        monsters.forEach(m => increasePain(m))
      },
    }
  ],
  actions: [],
})

export const BlindGainClass = createFoamClass({
  name: "BlindGainClass",
  inherits: GainClass,
  properties: [
    {
      name: 'name',
      type: 'string',
      value: 'blind',
    },
    {
      name: "icon",
      type: "image",
      value: require("../assets/combat/gains/blind.png"),
    },
  ],
  methods: [
    {
      name: "applyGainToUnits",
      code: function (mercenaries, monsters, id = undefined) {
        const amount = this.amount;

        // Add pain to the units!
        const increaseBlind = function (unit) {
          if (unit.isSelected || unit.id === id) {
            unit.increaseBlind(amount)
          }
        }

        mercenaries.forEach(m => increaseBlind(m))
        monsters.forEach(m => increaseBlind(m))
      },
    }
  ],
  actions: [],
})