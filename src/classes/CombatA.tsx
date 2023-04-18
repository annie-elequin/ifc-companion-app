import React from 'react';
import { createFoamClass } from "../foam-kit/model";
import { Combat } from '../components/Combat/Combat';
import { CassiusClass, FoulbornClass } from './Mercenaries';
import { BerserkerBadgerClass } from './Monsters';

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
    },
    {
      name: 'monsters',
      type: 'array',
      value: [
        new BerserkerBadgerClass(),
        new BerserkerBadgerClass(),
        new BerserkerBadgerClass(),
        new BerserkerBadgerClass(),
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