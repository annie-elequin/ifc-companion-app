import { createFoamClass } from "../foam-kit/model";
import { CombatClass } from './Abstract/CombatClass';

import { BlockGainClass, DamageGainClass, PierceGainClass,
  PinGainClass, PoisonGainClass, FlexGainClass, WoundGainClass, DisarmGainClass, PainGainClass } from "./Gains";
import { CassiusClass, DreyaClass, FoulbornClass, ScourgeClass } from './Mercenaries';
import { ArmadillosClass } from './Monsters';

export const CombatC = createFoamClass({
  name: 'CombatC',
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
        // new PainGainClass(),
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
        new ArmadillosClass(),
        new ArmadillosClass(),
        new ArmadillosClass(),
        new ArmadillosClass(),
        new ArmadillosClass(),
        new ArmadillosClass(),
      ]
    }
  ],
  actions: [],
})