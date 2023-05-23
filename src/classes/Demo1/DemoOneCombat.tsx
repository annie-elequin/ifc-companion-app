import { createFoamClass } from "../../foam-kit/model";
import { CombatClass } from '../Abstract/CombatClass';

import { BlockGainClass, DamageGainClass, PierceGainClass,
  PinGainClass, PoisonGainClass, WoundGainClass, DisarmGainClass, HealthGainClass } from "../Gains";
import { CassiusClass, FoulbornClass } from '../Mercenaries';
import { ArmadillosClass } from '../Monsters';

export const DemoOneCombat = createFoamClass({
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
        new ArmadillosClass({ id: '1' }),
        new ArmadillosClass({ id: '2' }),
        new ArmadillosClass({ id: '3' }),
        new ArmadillosClass({ id: '4' }),
        new ArmadillosClass({ id: '5' }),
        new ArmadillosClass({ id: '6' }),
      ]
    }
  ],
  actions: [],
})