import { createFoamClass } from "../../foam-kit/model";
import { StepClass } from "../Abstract/StepClass";
import { DemoOneCombat } from "../Demo1/DemoOneCombat";

const DemoOneClass = createFoamClass({
  name: "DemoOneFlow",
  inherits: StepClass,
  properties: [
    {
      name: "steps",
      type: "array",
      value: [
        {
          type: 'combat',
          value: new DemoOneCombat()
        }
      ],
    },
  ],
});

export const DemoOne = new DemoOneClass();