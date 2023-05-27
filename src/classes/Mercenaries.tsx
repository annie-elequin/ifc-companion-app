import { createFoamClass } from "../foam-kit/model";
import { UnitClass } from "./Abstract/UnitClass";

const FoulbornClass = createFoamClass({
  name: "Foulborn",
  inherits: UnitClass,
  properties: [
    {
      name: "health",
      type: "number",
      value: 17,
    },
    {
      name: "image",
      type: "image",
      value: require("../assets/combat/foulborn.png"),
    },
    {
      name: "maxHealth",
      type: "number",
      value: 17,
    },
  ],
});

const DreyaClass = createFoamClass({
  name: "Dreya",
  inherits: UnitClass,
  properties: [
    {
      name: "health",
      type: "number",
      value: 14,
    },
    {
      name: "image",
      type: "image",
      value: require("../assets/combat/dreya.png"),
    },
    {
      name: "maxHealth",
      type: "number",
      value: 14,
    },
  ],
});

const CassiusClass = createFoamClass({
  name: "Cassius",
  inherits: UnitClass,
  properties: [
    {
      name: "health",
      type: "number",
      value: 12,
    },
    {
      name: "image",
      type: "string",
      value: require("../assets/combat/cassius.png"),
    },
    {
      name: "maxHealth",
      type: "number",
      value: 12,
    },
  ],
});

const ScourgeClass = createFoamClass({
  name: "Scourge",
  inherits: UnitClass,
  properties: [
    {
      name: "health",
      type: "number",
      value: 22,
    },
    {
      name: "image",
      type: "string",
      value: require("../assets/combat/scourge.png"),
    },
    {
      name: "maxHealth",
      type: "number",
      value: 22,
    },
  ],
});

export { FoulbornClass, DreyaClass, ScourgeClass, CassiusClass };
