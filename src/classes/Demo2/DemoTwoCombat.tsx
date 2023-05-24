import { createFoamClass } from "../../foam-kit/model";
import { monsterColors } from "../../util/monsterColors";
import { CombatClass } from '../Abstract/CombatClass';

import { BlockGainClass, DamageGainClass, PierceGainClass,
  PinGainClass, PoisonGainClass, WoundGainClass, DisarmGainClass, HealthGainClass, BlindGainClass } from "../Gains";
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
        new FoulbornClass({ id: 'f' }),
        new CassiusClass({ id: 'c' }),
      ]
    },
    {
      name: 'monsters',
      type: 'array',
      value: [
        new RumblebeesClass({ id: '1', borderColor: monsterColors['1'] }),
        new RumblebeesClass({ id: '2', borderColor: monsterColors['2'] }),
        new RumblebeesClass({ id: '3', borderColor: monsterColors['3'] }),
        new RumblebeesClass({ id: '4', borderColor: monsterColors['4'] }),
        new RumblebeesClass({ id: '5', borderColor: monsterColors['5'] }),
        new RumblebeesClass({ id: '6', borderColor: monsterColors['6'] }),
        new RumblebeesClass({ id: '7', borderColor: monsterColors['7'] }),
        new RumblebeesClass({ id: '8', borderColor: monsterColors['8'] }),
        new RumblebeesClass({ id: '9', borderColor: monsterColors['9'] }),
      ]
    }
  ],
  actions: [],
})