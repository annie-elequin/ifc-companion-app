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

const ArmadillosClass = createFoamClass({
  name: 'Armadillos',
  inherits: UnitClass,
  properties: [
    {
      name: 'health',
      type: 'number',
      value: 16,
    },
    {
      name: 'image',
      type: 'image',
      value: require('../assets/combat/armadillos.jpeg')
    },
    {
      name: 'maxHealth',
      type: 'number',
      value: 16
    }
  ],
})

const RumblebeesClass = createFoamClass({
  name: 'Rumblebees',
  inherits: UnitClass,
  properties: [
    {
      name: 'health',
      type: 'number',
      value: 9,
    },
    {
      name: 'image',
      type: 'image',
      value: require('../assets/combat/rumblebee.jpg'),
    },
    {
      name: 'maxHealth',
      type: 'number',
      value: 9
    }
  ],
})

export { BerserkerBadgerClass, ArmadillosClass, RumblebeesClass }