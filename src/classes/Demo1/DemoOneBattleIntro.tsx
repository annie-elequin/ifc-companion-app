import React from "react";
import { StepClass } from "../Abstract/StepClass";
import { createFoamClass } from "../../foam-kit/model";
import { Scene } from "../../components/Scene";

export const DemoOneBattleIntro = createFoamClass({
  name: "DemoOneBattleIntro",
  inherits: StepClass,
  properties: [
    {
      name: "steps",
      type: "array",
      value: [
        {
          desc: "Max talks",
          caption:
            "Welllllcome back to Interstellar Fight Club! If you're just joining us then you missed a total barn burner as the Jacked Rabbits put the beatdown on Team Whambulance. What a lopsided affair!",
          bg: require("../../assets/scenes/battleIntro1/bg.png"),
          left: require("../../assets/scenes/battleIntro1/max.png"),
          right: require("../../assets/scenes/battleIntro1/mona.png"),
          audio: require("../../assets/scenes/battleIntro1/max1.mp3"),
          leftProps: {
            w: "68%",
            height: "85%",
          },
          rightProps: {
            w: "60%",
            height: "74%",
            opacity: 0.6,
          },
        },
        {
          desc: "Mona talks",
          caption: "That's right, Max - and speaking of 'lopsided,' it looks like our next match sees our favorite little losers going up against the A.R.M.adillos - that's gonna be tough to watch!",
          bg: require("../../assets/scenes/battleIntro1/bg.png"),
          left: require("../../assets/scenes/battleIntro1/max.png"),
          right: require("../../assets/scenes/battleIntro1/mona.png"),
          audio: require("../../assets/scenes/battleIntro1/mona1.mp3"),
          leftProps: {
            w: "68%",
            height: "85%",
            opacity: .6
          },
          rightProps: {
            w: "60%",
            height: "74%",
          },
        },
        {
          desc: "Max talks",
          caption: "Couldn't have said it better myself, Mona - the A.R.M.adillos sport a defensive shell equipped with razor sharp spikes and turbo thrusters for blazing speed. Taking them out will require clever positioning and well-timed attacks.",
          bg: require("../../assets/scenes/battleIntro1/bg.png"),
          left: require("../../assets/scenes/battleIntro1/max.png"),
          right: require("../../assets/scenes/battleIntro1/mona.png"),
          audio: require("../../assets/scenes/battleIntro1/max2.mp3"),
          leftProps: {
            w: "68%",
            height: "85%",
          },
          rightProps: {
            w: "60%",
            height: "74%",
            opacity: .6
          },
        },
        {
          desc: "Mona talks",
          caption: "Exactly - and that's the reason my money's on the A.R.M.adillos for this match. Buuuut for those betting fans with money on the little guys, we're certain that Nekaelos will spice things up and perhaps give them a fighting chance. Let's head on over and see what he's got up his sleeve for today's match.",
          bg: require("../../assets/scenes/battleIntro1/bg.png"),
          left: require("../../assets/scenes/battleIntro1/max.png"),
          right: require("../../assets/scenes/battleIntro1/mona.png"),
          audio: require("../../assets/scenes/battleIntro1/mona2.mp3"),
          leftProps: {
            w: "68%",
            height: "85%",
            opacity: .6
          },
          rightProps: {
            w: "60%",
            height: "74%",
          },
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
