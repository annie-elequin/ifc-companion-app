import React from 'react';
import { Circle, Icon } from 'native-base';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function GainIcon(props) {
    const { icon, color } = props;

    const circleSize = 150
    const circleMargin = circleSize / 50
    const iconSize = circleSize / 2

    return(
        <Circle m={circleMargin} size={circleSize} bg="white">
            <Icon as={<MaterialCommunityIcons name={icon} />} color={color} size={iconSize}/>
        </Circle>
    )
}