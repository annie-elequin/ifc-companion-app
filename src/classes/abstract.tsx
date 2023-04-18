import React from "react";
import { createFoamClass } from "../foam-kit/model";
import { View } from "native-base";

import { Combat } from "../components/Combat";
import GainIcon from "../components/GainIcon";

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
      name: "strength",
      type: "number",
      value: 0,
    },
    {
      name: "isDead",
      type: "boolean",
      value: false,
    },
    {
      name: "maxHealth",
      type: "number",
      value: 0,
    },
    {
      name: "image",
      type: "image",
      value: require("../assets/combat/unit-placeholder.webp"),
    },
    {
      name: 'isSelected',
      type: 'boolean',
      value: false,
    }
  ],
  methods: [
    {
      name: "doDamage",
      code: function (amount, pierce = false) {
        if (this.block > 0 && !pierce) {
          if (this.block < amount) {
            const remaining = amount - this.block;
            this.decreaseHealth(remaining);
          }

          this.decreaseBlock(amount)
        } else {
          this.decreaseHealth(amount);
        }
      },
    },
    {
      name: "increaseBlock",
      code: function (amount) {
        if (this.block <= 0) {
          this.block = 0;
          // TODO: Add block gain icon to unit UI
        }

        this.block += amount;
        console.log("Block increased to " + this.block);
      }
    },
    {
      name: "decreaseBlock",
      code: function (amount) {
        if (this.block > amount) {
          this.block = this.block - amount;
        }
        else {
          // TODO: Remove block gain icon from unit UI
          this.block = 0;
        }

        console.log("Block decreased to " + this.block);
      }
    },
    {
      name: "increaseHealth",
      code: function (amount) {
        if (this.health + amount > this.maxHealth) {
          this.health = this.maxHealth;
        } else {
          this.health = this.health + amount;
        }
      },
    },
    {
      name: "decreaseHealth",
      code: function (amount) {
        if (this.health > amount) {
          this.health = this.health - amount;
        } else {
          this.health = 0;
          this.isDead = true;
        }
      },
    },
    {
      name: "toElement",
      code: function () {
        return React.createElement(
          function ({ value }) {
            return <View>Combat Abstract Unit</View>;
          },
          { value: this }
        );
      },
    },
  ],
  actions: [],
});

export const CombatClass = createFoamClass({
  name: 'CombatClass',
  properties: [
    {
      name: 'currentTurn',
      type: 'number',
      value: 1,
    },
    {
      name: 'gains',
      type: 'array',
      value: []
    },
    {
      name: 'mercenaries',
      type: 'array',
      value: []
    },
    {
      name: 'monsters',
      type: 'array',
      value: []
    }
  ],
  methods: [
    {
      name: "toElement",
      code: function () {
        return React.createElement(
          function ({ value }) {
            return <Combat value={value} />;
          },
          { value: this }
        );
      },
    },
  ],
  actions: [],
})

export const GainClass = createFoamClass({
  name: "GainClass",
  properties: [
    {
      name: "icon",
      type: "string",
      value: "sword",
    },
    {
      name: "color",
      type: "string",
      value: "#000000",
    },
  ],
  methods: [
    {
      name: "toElement",
      code: function (mercenaries, monsters) {
        return React.createElement(
          function ({ value }) {
            const onPress = function () {
              value.applyGainToUnits(mercenaries, monsters)
            }

            return <GainIcon icon={value.icon} color={value.color} callback={onPress} />;
          },
          { value: this }
        );
      },
    },
    {
      name: "applyGainToUnits",
      code: function (mercenaries, monsters) {
        console.log("Gain applied!")
      }
    }
  ],
  actions: [],
})
