import { createFoamClass } from "../foam-kit/model";
import { StepClass } from "./abstract";

export const SceneA = createFoamClass({
  name: 'SceneA',
  inherits: StepClass,
  properties: [
    {
      name: "route",
      type: "string",
      value: "scenes/sceneA",
    },
    {
      name: "steps",
      type: "array",
      value: [
        {
          desc: "Ayaka talks",
          bg: "bg.jpg",
          left: "denton1.png",
          right: "ayaka2.png",
          audio: "ayaka1.ogg",
        },
        {
          desc: "Denton talks",
          bg: "bg.jpg",
          left: "denton2.png",
          right: "ayaka1.png",
          audio: "denton1.ogg",
        },
        {
          desc: "Ayaka talks",
          bg: "bg.jpg",
          left: "denton1.png",
          right: "ayaka2.png",
          audio: "ayaka2.ogg",
        },
        {
          desc: "Denton talks",
          bg: "bg.jpg",
          left: "denton2.png",
          right: "ayaka1.png",
          audio: "denton2.ogg",
        },
      ],
    },
  ],
  methods: [],
  actions: [],
})