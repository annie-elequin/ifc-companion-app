import { createFoamClass } from "../../foam-kit/model";
import { CombatClass } from '../Abstract/CombatClass';

import { BlockGainClass, DamageGainClass, PierceGainClass,
  PinGainClass, PoisonGainClass, FlexGainClass, WoundGainClass, DisarmGainClass, HealthGainClass } from "../Gains";
import { DreyaClass, ScourgeClass } from '../Mercenaries';
import { ArmadillosClass } from '../Monsters';

export const DemoThreeCombat = createFoamClass({
  name: 'DemoThreeCombat',
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
        new DreyaClass(),
        new ScourgeClass(),
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