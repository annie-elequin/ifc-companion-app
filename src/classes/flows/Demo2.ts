import { createFoamClass } from "../../foam-kit/model";
import { StepClass } from "../Abstract/StepClass";
import { DemoTwoCombat } from "../Demo2/DemoTwoCombat";

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
          value: new DemoTwoCombat()
        }
      ],
    },
  ],
});

export const DemoTwo = new DemoTwoClass();