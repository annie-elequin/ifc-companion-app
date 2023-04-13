import React from "react";
import { Center, Container, HStack } from "native-base";
import GainIcon from "../../components/GainIcon";

export default function Combat() {
  return (
    <Center h="full" bg="darkBlue.900">
      <HStack>
        <GainIcon icon="sword" color="#BEBEBE"></GainIcon>
        <GainIcon icon="bow-arrow" color="#964B00"></GainIcon>
        <GainIcon icon="shield" color="#333BFF"></GainIcon>
        <GainIcon icon="water" color="#FF0000"></GainIcon>
        <GainIcon icon="arm-flex" color="#fff64a"></GainIcon>
        <GainIcon icon="bottle-tonic-skull" color="#008000"></GainIcon>
        <GainIcon icon="anchor" color="#5A5A5A"></GainIcon>
      </HStack>
    </Center>
  );
};
