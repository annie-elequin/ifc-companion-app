import React from 'react';
import { createFoamClass } from "../foam-kit/model";
import { Combat } from '../components/Combat/Combat';

export const CombatA = createFoamClass({
  name: 'CombatA',
  properties: [],
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