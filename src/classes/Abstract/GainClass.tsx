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
        name: 'name',
        type: 'string',
      }
    ],
    methods: [
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
        code: function (increase, decrease) {
          return React.createElement(
            function ({ value, increase, decrease }) {
              return <GainPill value={value} increase={increase} decrease={decrease} />;
            },
            { value: this, increase, decrease }
          );
        },
      },
    ],
    actions: [],
})
  