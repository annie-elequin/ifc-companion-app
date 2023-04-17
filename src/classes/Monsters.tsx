import { createFoamClass } from "../foam-kit/model";
import { UnitClass } from "./abstract";

const BerserkerBadgersClass = createFoamClass({
  name: 'BerserkerBadgers',
  inherits: UnitClass,
})

export {
  BerserkerBadgersClass,
}