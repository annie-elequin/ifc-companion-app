import React, { useContext } from "react";
import {
  HStack,
  Image,
  Text,
  View,
} from "native-base";
import { useProperty } from "../../foam-kit/hooks";
import { Tooltip } from 'react-tippy';
import GainPopover from "./GainPopover";
import { AppContext } from "../../context/AppContext";

export default function GainPill({ value, unit }) {
  const [label] = useProperty({ value, property: "label" });
  const [icon] = useProperty({ value, property: "icon" });

  const { state } = useContext(AppContext);

  // const combat = state.currentFlow.steps[state.currentFlow.currentStep]
  // const { mercenaries, monsters } = combat.value;

  const [gainAmountOnUnit] = useProperty({ value: unit, property: label })

  if (gainAmountOnUnit <= 0) {
    return null;
  }

  const increase = () => {}
  const decrease = () => {}

  return (
    <View>
        <Tooltip html={<GainPopover increase={increase} decrease={decrease} />} position="right" trigger="click" interactive offset={-20} arrow>
          <HStack alignItems="center" bg='lightBlue.300' padding='1' space='1' borderRadius={15}>
            <Image w="25" h="25" source={{uri: icon}} alt="Gain Icon"/>
            <Text bold fontSize="2xl" color="#FFFFFF">{gainAmountOnUnit}</Text>
          </HStack>
        </Tooltip>
    </View>
  )
}