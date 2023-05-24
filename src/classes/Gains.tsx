import { createFoamClass } from "../foam-kit/model";
import { GainClass } from "./Abstract/GainClass";

export const HealthGainClass = createFoamClass({
  name: "HealthGainClass",
  inherits: GainClass,
  properties: [
    {
      name: "icon",
      type: "image",
      value: require("../assets/combat/gains/health.png"),
    },
  ],
  methods: [
    {
      name: "applyGainToUnits",
      code: function (mercenaries, monsters) {
        const amount = this.amount;

        const addHealth = function (unit) {
          if (unit.isSelected) {
            unit.increaseHealth(amount)
          }
        }

        mercenaries.forEach(m => addHealth(m))
        monsters.forEach(m => addHealth(m))
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
        name: "icon",
        type: "image",
        value: require("../assets/combat/gains/damage.png"),
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
        type: "image",
        value: require("../assets/combat/gains/pierce.png"),
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters) {
          const amount = this.amount;

          // Pierce damage the units!
          const damageUnit = function (unit) {
            if (unit.isSelected) {
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
        name: "icon",
        type: "image",
        value: require("../assets/combat/gains/block.png"),
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
        type: "image",
        value: require("../assets/combat/gains/wound.png"),
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters) {
          const amount = this.amount;

          // Increase wound on the units!
          const increaseWound = function (unit) {
            if (unit.isSelected) {
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
        name: "icon",
        type: "image",
        value: require("../assets/combat/gains/disarm.png"),
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters) {
          const amount = this.amount;

          // Add flex to the units!
          const increaseFlex = function (unit) {
            if (unit.isSelected) {
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
        name: "icon",
        type: "image",
        value: require("../assets/combat/gains/poison.png"),
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters) {
          const amount = this.amount;

          // Add poison to the units!
          const increasePoison = function (unit) {
            if (unit.isSelected) {
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
        name: "icon",
        type: "image",
        value: require("../assets/combat/gains/pin.png"),
      },
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters) {
          const amount = this.amount;

          // Add pin to the units!
          const increasePin = function (unit) {
            if (unit.isSelected) {
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
      name: "icon",
      type: "image",
      value: require("../assets/combat/gains/disarm.png"),
    },
  ],
  methods: [
    {
      name: "applyGainToUnits",
      code: function (mercenaries, monsters) {
        const amount = this.amount;

        // Add disarm to the units!
        const increaseDisarm = function (unit) {
          if (unit.isSelected) {
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
      name: "icon",
      type: "image",
      value: require("../assets/combat/gains/disarm.png"),
    },
  ],
  methods: [
    {
      name: "applyGainToUnits",
      code: function (mercenaries, monsters) {
        const amount = this.amount;

        // Add pain to the units!
        const increasePain = function (unit) {
          if (unit.isSelected) {
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
      name: "icon",
      type: "image",
      value: require("../assets/combat/gains/blind.png"),
    },
  ],
  methods: [
    {
      name: "applyGainToUnits",
      code: function (mercenaries, monsters) {
        const amount = this.amount;

        // Add pain to the units!
        const increaseBlind = function (unit) {
          if (unit.isSelected) {
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