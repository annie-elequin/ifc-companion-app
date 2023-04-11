import React from "react"

function SimpleView({ property, value }) {
    return (
        <div>
            <label>
                {property.label}
                {/* <span>&nbsp;{value}</span> */}
            </label>
        </div>
    )
}

export const BaseTheme = Object.assign({}, {}, {
  SimpleView,
});
