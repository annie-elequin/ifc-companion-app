import { createFoamClass } from "../../foam-kit/model";
import { StepClass } from "../Abstract/StepClass";
import { DemoOneBattleIntro } from "../Demo1/DemoOneBattleIntro";
import { DemoOneCombat } from "../Demo1/DemoOneCombat";

const DemoOneClass = createFoamClass({
  name: "DemoOneFlow",
  inherits: StepClass,
  properties: [
    {
      name: "steps",
      type: "array",
      value: [
        // {
        //   type: 'scene',
        //   value: new DemoOneBattleIntro()
        // },
        {
          type: 'combat',
          value: new DemoOneCombat()
        }
      ],
    },
  ],
});

export const DemoOne = new DemoOneClass();