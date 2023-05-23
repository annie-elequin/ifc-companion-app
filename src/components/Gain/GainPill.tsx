import React from "react";
import {
  HStack,
  Icon,
  Text,
  View,
} from "native-base";
import { useProperty } from "../../foam-kit/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tooltip } from 'react-tippy';
import GainPopover from "./GainPopover";

export default function GainPill({ value, increase, decrease }) {
  const [icon] = useProperty({ value, property: "icon" });
  const [color] = useProperty({ value, property: "color" });
  const [amount] = useProperty({ value, property: "amount" });

  return (
    <View>
      { amount > 0 &&
        <Tooltip html={<GainPopover increase={increase} decrease={decrease} />} position="right" trigger="click" interactive offset={-20} arrow>
          <HStack alignItems="center" bg='lightBlue.300' padding='1' borderRadius={15}>
            <Icon as={<MaterialCommunityIcons name={icon}/>} color={color} size="2xl"/>
            <Text bold fontSize="2xl" color="#FFFFFF">{amount}</Text>
          </HStack>
        </Tooltip>
      }
    </View>
  )
}