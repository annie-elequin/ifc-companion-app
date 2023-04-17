import React, { useState } from "react";
import { HStack, Heading, VStack } from "native-base";
import GainIcon from "./GainIcon";
import CombatEntity from "./CombatEntity";
import { useProperty } from "../../foam-kit/hooks";

export const Combat = ({ value }) => {
  const [mercenaries] = useProperty({value, property: 'mercenaries'})
  return (
    <VStack h="full" alignItems="center">
      <Heading m="10" fontSize="5xl">
        Combat
      </Heading>
      <HStack w="full" justifyContent="center">
        <GainIcon icon="sword" color="#BEBEBE"></GainIcon>
        <GainIcon icon="bow-arrow" color="#964B00"></GainIcon>
        <GainIcon icon="shield" color="#333BFF"></GainIcon>
        <GainIcon icon="water" color="#FF0000"></GainIcon>
        <GainIcon icon="arm-flex" color="#fff64a"></GainIcon>
        <GainIcon icon="bottle-tonic-skull" color="#008000"></GainIcon>
        <GainIcon icon="anchor" color="#5A5A5A"></GainIcon>
      </HStack>
      {mercenaries.map(m => m.toElement())}
    </VStack>
  );
};
