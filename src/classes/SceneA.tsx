import React from "react";
import { Scene } from "../components/Scene";
import { createFoamClass } from "../foam-kit/model";
import { StepClass } from "./Abstract/StepClass";

export const SceneA = createFoamClass({
  name: "SceneA",
  inherits: StepClass,
  properties: [
    {
      name: "steps",
      type: "array",
      value: [
        {
          desc: "Ayaka talks",
          bg: require("../assets/scenes/sceneA/bg.jpg"),
          left: require("../assets/scenes/sceneA/denton1.png"),
          right: require("../assets/scenes/sceneA/ayaka2.png"),
          audio: require("../assets/scenes/sceneA/ayaka1.ogg"),
        },
        {
          desc: "Denton talks",
          bg: require("../assets/scenes/sceneA/bg.jpg"),
          left: require("../assets/scenes/sceneA/denton2.png"),
          right: require("../assets/scenes/sceneA/ayaka1.png"),
          audio: require("../assets/scenes/sceneA/denton1.ogg"),
        },
        {
          desc: "Ayaka talks",
          bg: require("../assets/scenes/sceneA/bg.jpg"),
          left: require("../assets/scenes/sceneA/denton1.png"),
          right: require("../assets/scenes/sceneA/ayaka2.png"),
          audio: require("../assets/scenes/sceneA/ayaka2.ogg"),
        },
        {
          desc: "Denton talks",
          bg: require("../assets/scenes/sceneA/bg.jpg"),
          left: require("../assets/scenes/sceneA/denton2.png"),
          right: require("../assets/scenes/sceneA/ayaka1.png"),
          audio: require("../assets/scenes/sceneA/denton2.ogg"),
        },
      ],
    },
  ],
  methods: [
    {
      name: "toElement",
      code: function () {
        return React.createElement(
          function ({ value }) {
            return <Scene value={value} />;
          },
          { value: this }
        );
      },
    },
  ],
  actions: [],
});
