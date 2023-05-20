import { createFoamClass } from "../../foam-kit/model";
import { StepClass } from "../Abstract/StepClass";
import { CombatC } from "../CombatC";

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
          value: new CombatC()
        }
      ],
    },
  ],
});

export const DemoThree = new DemoThreeClass();