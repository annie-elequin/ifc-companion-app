import { createFoamClass } from "../../foam-kit/model";
import { StepClass } from "../Abstract/StepClass";
import { DemoOneBattleIntro } from "../Demo1/DemoOneBattleIntro";
import { DemoOneCombatClass } from "../Demo1/DemoOneCombat";

export const DemoOneClass = createFoamClass({
  name: "DemoOneFlow",
  inherits: StepClass,
  properties: [
    {
      name: "steps",
      type: "array",
      value: [
        {
          type: 'combat',
          value: new DemoOneCombatClass()
        }
      ],
    },
  ],
});
