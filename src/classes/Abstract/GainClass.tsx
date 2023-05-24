import React from "react";
import { createFoamClass } from "../../foam-kit/model";

import GainIcon from "../../components/GainIcon";

export const GainClass = createFoamClass({
    name: "GainClass",
    properties: [
      {
        name: "icon",
        type: "string",
      },
      {
        name: "image",
        type: "image",
      },
      {
        name: "color",
        type: "string",
        value: "#000000",
      },
      {
        name: 'amount',
        type: 'number',
        value: 0,
      },
      {
        name: 'name',
        type: 'string',
      }
    ],
    methods: [
      {
        name: "toElement",
        code: function () {
          return React.createElement(
            function ({ value }) {
              return <GainIcon value={value}/>;
            },
            { value: this }
          );
        },
      },
    ],
    actions: [],
})
  