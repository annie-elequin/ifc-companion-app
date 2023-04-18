import { createFoamClass } from "../foam-kit/model";
import { CombatClass } from './abstract';
import { CassiusClass, FoulbornClass } from './Mercenaries';
import { BerserkerBadgerClass } from './Monsters';

export const CombatA = createFoamClass({
  name: 'CombatA',
  inherits: CombatClass,
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
  actions: [],
})