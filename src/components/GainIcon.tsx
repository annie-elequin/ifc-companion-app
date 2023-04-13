import React from 'react';
import { Circle, Icon } from 'native-base';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function GainIcon(props) {
    const { icon, color } = props;

    return(
        <Circle m="5" size="150px" bg="white">
            <Icon as={<MaterialCommunityIcons name={icon} />} color={color} size={75}/>
        </Circle>
    )
}