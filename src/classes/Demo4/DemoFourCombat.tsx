import { createFoamClass } from "../../foam-kit/model";
import { CombatClass } from '../Abstract/CombatClass';

import { BlockGainClass, DamageGainClass, PierceGainClass,
  PinGainClass, PoisonGainClass, WoundGainClass, DisarmGainClass, HealthGainClass, BlindGainClass } from "../Gains";
import { DreyaClass, ScourgeClass } from '../Mercenaries';
import { RumblebeesClass } from '../Monsters';

export const DemoFourCombat = createFoamClass({
  name: 'DemoFourCombat',
  inherits: CombatClass,
  properties: [
    {
      name: 'gains',
      type: 'array',
      value: [
        new HealthGainClass(),
        new DamageGainClass(),
        new PierceGainClass(),
        new BlockGainClass(),
        new WoundGainClass(),
        new PoisonGainClass(),
        new PinGainClass(),
        new DisarmGainClass(),
        new BlindGainClass(),
      ]
    },
    {
      name: 'mercenaries',
      type: 'array',
      value: [
        new DreyaClass(),
        new ScourgeClass(),
      ]
    },
    {
      name: 'monsters',
      type: 'array',
      value: [
        new RumblebeesClass({ id: '1' }),
        new RumblebeesClass({ id: '2' }),
        new RumblebeesClass({ id: '3' }),
        new RumblebeesClass({ id: '4' }),
        new RumblebeesClass({ id: '5' }),
        new RumblebeesClass({ id: '6' }),
        new RumblebeesClass({ id: '7' }),
        new RumblebeesClass({ id: '8' }),
        new RumblebeesClass({ id: '9' }),
      ]
    }
  ],
  actions: [],
})