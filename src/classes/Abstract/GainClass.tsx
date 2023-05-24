import React from "react";
import { createFoamClass } from "../../foam-kit/model";

import GainIcon from "../../components/Gain/GainIcon";
import GainPill from "../../components/Gain/GainPill";

export const GainClass = createFoamClass({
    name: "GainClass",
    properties: [
      {
        name: "icon",
        type: "image",
        value: require("../../assets/combat/gains/health.png"),
      },
      {
        name: 'amount',
        type: 'number',
        value: 0,
      },
      {
        name: 'label',
        type: 'string',
      },
      {
        name: 'showOnUnit',
        type: 'boolean',
        value: true,
      }
    ],
    methods: [
      {
        name: "applyGainToUnits",
        code: function (mercenaries, monsters, id = null) {
          try {
            const label = this.label;
            const amount = this.amount;
            const modify = function (unit) {
              if (unit.isSelected || unit.id === id) {
                unit.modifyGain(label, amount)
              }
            }
    
            mercenaries.forEach(m => modify(m))
            monsters.forEach(m => modify(m))
          } catch (e) {
            console.warn('caught error in applyGainToUnits for ', this.label)
            console.warn(e)
          }
        },
      },
      {
        name: "toIconElement",
        code: function () {
          return React.createElement(
            function ({ value }) {
              return <GainIcon value={value}/>;
            },
            { value: this }
          );
        },
      },
      {
        name: "toPillElement",
        code: function (unit) {
          return React.createElement(
            function ({ value, unit }) {
              return <GainPill value={value} unit={unit} />;
            },
            { value: this, unit }
          );
        },
      },
    ],
    actions: [],
})
  