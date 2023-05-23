import React from "react";
import { createFoamClass } from "../../foam-kit/model";

import GainIcon from "../../components/Gain/GainIcon";
import GainPill from "../../components/Gain/GainPill";

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
      {
        name: 'amount',
        type: 'number',
        value: 0,
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
  