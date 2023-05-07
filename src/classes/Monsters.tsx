import { createFoamClass } from "../foam-kit/model";
import { UnitClass } from "./Abstract/UnitClass";

const BerserkerBadgerClass = createFoamClass({
  name: 'BerserkerBadger',
  inherits: UnitClass,
  properties: [
    {
      name: 'health',
      type: 'number',
      value: 28,
    },
    {
      name: 'image',
      type: 'image',
      value: require('../assets/combat/berserkerbadger.png')
    },
    {
      name: 'maxHealth',
      type: 'number',
      value: 28
    }
  ],
})

export { BerserkerBadgerClass }