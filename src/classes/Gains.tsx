import { createFoamClass } from "../foam-kit/model";
import { GainClass } from "./abstract";

export const DamageGainClass = createFoamClass({
    name: "DamageGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "sword",
      },
      {
        name: "color",
        type: "string",
        value: "#BEBEBE",
      },
    ],
    actions: [],
})

export const PierceGainClass = createFoamClass({
    name: "PierceGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "bow-arrow",
      },
      {
        name: "color",
        type: "string",
        value: "#964B00",
      },
    ],
    actions: [],
})

export const BlockGainClass = createFoamClass({
    name: "BlockGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "shield",
      },
      {
        name: "color",
        type: "string",
        value: "#333BFF",
      },
    ],
    actions: [],
})

export const BleedGainClass = createFoamClass({
    name: "BleedGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "water",
      },
      {
        name: "color",
        type: "string",
        value: "#FF0000",
      },
    ],
    actions: [],
})

export const StrengthGainClass = createFoamClass({
    name: "StrengthGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "arm-flex",
      },
      {
        name: "color",
        type: "string",
        value: "#fff64a",
      },
    ],
    actions: [],
})

export const PoisonGainClass = createFoamClass({
    name: "PoisonGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "bottle-tonic-skull",
      },
      {
        name: "color",
        type: "string",
        value: "#008000",
      },
    ],
    actions: [],
})

export const PinGainClass = createFoamClass({
    name: "PinGainClass",
    inherits: GainClass,
    properties: [
      {
        name: "icon",
        type: "string",
        value: "anchor",
      },
      {
        name: "color",
        type: "string",
        value: "#5A5A5A",
      },
    ],
    actions: [],
})