import { createFoamClass } from "../../foam-kit/model";
import { StepClass } from "../Abstract/StepClass";
import { DemoFourCombat } from "../Demo4/DemoFourCombat";

const DemoFourClass = createFoamClass({
  name: "DemoFour",
  inherits: StepClass,
  properties: [
    {
      name: "steps",
      type: "array",
      value: [
        {
          type: 'combat',
          value: new DemoFourCombat()
        }
      ],
    },
  ],
});

export const DemoFour = new DemoFourClass();