import { createFoamClass } from "../foam-kit/model";
import { SceneA } from "./SceneA";
import { StepClass } from "./abstract";

const DemoOneClass = createFoamClass({
  name: "DemoOneFlow",
  inherits: StepClass,
  properties: [
    {
      name: "steps",
      type: "array",
      value: [
        {
          type: 'scene',
          value: new SceneA()
        },
      ],
    },
  ],
});
export const DemoOne = new DemoOneClass();
