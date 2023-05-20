import { createFoamClass } from "../../foam-kit/model";
import { StepClass } from "../Abstract/StepClass";
import { CombatB } from "../CombatB";

const DemoTwoClass = createFoamClass({
  name: "DemoTwo",
  inherits: StepClass,
  properties: [
    {
      name: "steps",
      type: "array",
      value: [
        {
          type: 'combat',
          value: new CombatB()
        }
      ],
    },
  ],
});

export const DemoTwo = new DemoTwoClass();