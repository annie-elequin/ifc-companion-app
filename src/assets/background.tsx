import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"
const Background = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={1500} height={1500} {...props}>
    <Defs>
      <LinearGradient
        id="a"
        x1="50%"
        x2="50%"
        y1="0%"
        y2="100%"
        gradientTransform="rotate(155 .5 .5)"
      >
        <Stop offset="0%" stopColor="hsl(272, 92%, 19%)" />
        <Stop offset="100%" stopColor="hsl(227, 100%, 29%)" />
      </LinearGradient>
    </Defs>
    <Path fill="url(#a)" d="M0 0h1500v1500H0z" />
  </Svg>
)
export default Background
