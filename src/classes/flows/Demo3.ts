import { createFoamClass } from "../../foam-kit/model";
import { StepClass } from "../Abstract/StepClass";
import { DemoThreeCombat } from "../Demo3/DemoThreeCombat";

const DemoThreeClass = createFoamClass({
  name: "DemoThree",
  inherits: StepClass,
  properties: [
    {
      name: "steps",
      type: "array",
      value: [
        {
          type: 'combat',
          value: new DemoThreeCombat()
        }
      ],
    },
  ],
});

export const DemoThree = new DemoThreeClass();