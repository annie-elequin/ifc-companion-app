import { createFoamClass } from "../../foam-kit/model";
import { CombatClass } from '../Abstract/CombatClass';

import { BlockGainClass, DamageGainClass, PierceGainClass,
  PinGainClass, PoisonGainClass, FlexGainClass, WoundGainClass, DisarmGainClass } from "../Gains";
import { CassiusClass, FoulbornClass } from '../Mercenaries';
import { RumblebeesClass } from '../Monsters';

export const DemoTwoCombat = createFoamClass({
  name: 'DemoTwoCombat',
  inherits: CombatClass,
  properties: [
    {
      name: 'gains',
      type: 'array',
      value: [
        new DamageGainClass(),
        new PierceGainClass(),
        new BlockGainClass(),
        new WoundGainClass(),
        new FlexGainClass(),
        new PoisonGainClass(),
        new PinGainClass(),
        new DisarmGainClass(),
      ]
    },
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
        new RumblebeesClass(),
        new RumblebeesClass(),
        new RumblebeesClass(),
        new RumblebeesClass(),
        new RumblebeesClass(),
        new RumblebeesClass(),
        new RumblebeesClass(),
        new RumblebeesClass(),
      ]
    }
  ],
  actions: [],
})