import React from "react";
import { createFoamClass } from "../../foam-kit/model";

import { Combat } from "../../components/Combat/Combat";

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