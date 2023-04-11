import { createFoamClass } from "./foam-kit/model";

const DemoOneClass = createFoamClass({
  name: "DemoOneFlow",
  properties: [
    {
      name: "route",
      type: "string",
      value: "demoOne/sceneOne",
    },
    {
      name: "currentStep",
      type: "number",
      value: 0,
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
  methods: [
    {
      name: "nextStep",
      code: function () {
        if (this.currentStep < this.steps.length - 1) {
          this.currentStep = this.currentStep + 1;
        }
      },
    },
    {
      name: "previousStep",
      code: function () {
        if (this.currentStep > 1) {
          this.currentStep = this.currentStep - 1;
        }
      },
    },
  ],
});
export const DemoOne = new DemoOneClass();

export const DemoOneFlow = {
  sceneOne: {
    type: "scene",
    steps: [
      {
        desc: "Xiao talks",
        bg: "bg.jpg",
        left: "xiao2.webp",
        right: "ayaka1.png",
        audio: "audio1.ogg",
      },
      {
        desc: "Ayaka talks",
        bg: "bg.jpg",
        left: "xiao1.webp",
        right: "ayaka2.png",
        audio: "audio2.ogg",
      },
      {
        desc: "Xiao talks",
        bg: "bg.jpg",
        left: "xiao2.webp",
        right: "ayaka1.png",
        audio: "audio3.ogg",
      },
      {
        desc: "Ayaka talks",
        bg: "bg.jpg",
        left: "xiao1.webp",
        right: "ayaka2.png",
        audio: "audio4.ogg",
      },
    ],
  },
  combat: {
    type: "combat",
    // other details here
  },
  sceneTwo: {
    type: "scene",
    steps: [],
  },
};

export const DemoTwoFlow = {
  sceneOne: {
    type: "scene",
    steps: [],
  },
  combat: {
    type: "combat",
  },
  sceneTwo: {
    type: "scene",
    steps: [],
  },
};
