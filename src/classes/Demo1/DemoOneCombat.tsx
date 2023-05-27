import { createFoamClass } from "../../foam-kit/model";
import { monsterColors } from "../../util/monsterColors";
import { CombatClass } from '../Abstract/CombatClass';

import { BlockGainClass, DamageGainClass, PierceGainClass,
  PinGainClass, PoisonGainClass, WoundGainClass, DisarmGainClass, HealthGainClass, BlindGainClass } from "../Gains";
import { CassiusClass, FoulbornClass } from '../Mercenaries';
import { ArmadillosClass } from '../Monsters';

export const DemoOneCombatClass = createFoamClass({
  name: 'DemoOneCombat',
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
        new ArmadillosClass({ id: '1', borderColor: monsterColors['1'] }),
        new ArmadillosClass({ id: '2', borderColor: monsterColors['2'] }),
        new ArmadillosClass({ id: '3', borderColor: monsterColors['3'] }),
        new ArmadillosClass({ id: '4', borderColor: monsterColors['4'] }),
        new ArmadillosClass({ id: '5', borderColor: monsterColors['5'] }),
        new ArmadillosClass({ id: '6', borderColor: monsterColors['6'] }),
      ]
    }
  ],
  actions: [],
})