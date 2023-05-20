import { createFoamClass } from "../../foam-kit/model";
import { StepClass } from "../Abstract/StepClass";
import { CombatD } from "../CombatD";

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
          value: new CombatD()
        }
      ],
    },
  ],
});

export const DemoFour = new DemoFourClass();