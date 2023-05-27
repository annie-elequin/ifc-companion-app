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

  const [gainAmountOnUnit] = useProperty({ value: unit, property: label })

  if (gainAmountOnUnit <= 0) {
    return null;
  }

  const applyGains = (increase = true) => {
    const combat = state.currentFlow.steps[state.currentFlow.currentStep]
    const { mercenaries, monsters } = combat.value;
    const ogAmount = value.amount;
    value.amount = increase ? 1 : -1;
    value.applyGainToUnits(mercenaries, monsters, unit.id);
    value.amount = ogAmount;
  };

  return (
    <View>
        <Tooltip html={<GainPopover increase={applyGains} decrease={() => applyGains(false)} />} position="right" trigger="click" interactive offset={-20} arrow>
          <HStack alignItems="center" bg='lightBlue.200' padding='1' space='1' borderRadius={15} paddingRight='3'>
            <Image w="25" h="25" source={{uri: icon}} alt="Gain Icon"/>
            <Text bold fontSize="2xl" color="#000">{gainAmountOnUnit}</Text>
          </HStack>
        </Tooltip>
    </View>
  )
}