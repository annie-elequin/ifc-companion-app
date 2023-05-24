import React from "react";
import {
  HStack,
  Image,
  Text,
  View,
} from "native-base";
import { useProperty } from "../../foam-kit/hooks";
import { Tooltip } from 'react-tippy';
import GainPopover from "./GainPopover";

export default function GainPill({ value, increase, decrease }) {
  const [icon] = useProperty({ value, property: "icon" });
  const [amount] = useProperty({ value, property: "amount" });

  return (
    <View>
      { amount > 0 &&
        <Tooltip html={<GainPopover increase={increase} decrease={decrease} />} position="right" trigger="click" interactive offset={-20} arrow>
          <HStack alignItems="center" bg='lightBlue.300' padding='1' space='1' borderRadius={15}>
            <Image w="25" h="25" source={{uri: icon}} alt="Gain Icon"/>
            <Text bold fontSize="2xl" color="#FFFFFF">{amount}</Text>
          </HStack>
        </Tooltip>
      }
    </View>
  )
}