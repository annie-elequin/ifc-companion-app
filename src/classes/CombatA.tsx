import React from 'react';
import { createFoamClass } from "../foam-kit/model";
import { Combat } from '../components/Combat/Combat';
import { CassiusClass, FoulbornClass } from './Mercenaries';

export const CombatA = createFoamClass({
  name: 'CombatA',
  properties: [
    {
      name: 'mercenaries',
      type: 'array',
      value: [
        new FoulbornClass(),
        new CassiusClass(),
      ]
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