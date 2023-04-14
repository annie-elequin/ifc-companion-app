import {
  ArrowBackIcon,
  ArrowForwardIcon,
  Button,
  Center,
  Container,
  Fab,
  Heading,
  Image,
} from "native-base";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useProperty } from "../foam-kit/hooks";
import { Audio } from "expo-av";
import { Scene } from "./Scene/Scene";
import { Combat } from "./Combat/Combat";

export default function DemoView({ navigation }) {
  const { state } = useContext(AppContext);

  if (!state.currentFlow) {
    navigation.navigate("Home");
  }

  const [currentStepIndex] = useProperty({
    value: state.currentFlow,
    property: "currentStep",
  });
  const [steps] = useProperty({
    value: state.currentFlow,
    property: "steps",
  });
  const step = steps[currentStepIndex]

  const renderStep = () => {
    switch (step.type) {
      case "scene":
        return <Scene value={step.value} />;
      case "combat":
        return <Combat value={step.value} />;
      default:
        return null;
    }
  };

  return (
    <Container
      maxW="full"
      w="full"
      h="full"
      style={{ position: "relative" }}
      bg="darkBlue.900"
    >
      <Heading>Demo One</Heading>
      <Fab
        renderInPortal={false}
        shadow={2}
        left={3}
        top={3}
        right="unset"
        bottom="unset"
        size="md"
        icon={<ArrowBackIcon />}
      />
      <Fab
        renderInPortal={false}
        shadow={2}
        right={3}
        top={3}
        left="unset"
        bottom="unset"
        size="md"
        icon={<ArrowForwardIcon />}
      />
      {renderStep()}
      {/* <Image source={{ uri: require('../assets/scenes/demoOne/sceneOne/bg.jpg')}} resizeMode='cover' style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} alt='bg' />
          <Image source={{ uri: require(`../assets/scenes/demoOne/sceneOne/${currentStep.left}`)}} resizeMode='contain' style={{ position: 'absolute', left: 0, bottom: -10 }} w='50%' height='70%' alt='left' />
          <Image source={{ uri: require(`../assets/scenes/demoOne/sceneOne/${currentStep.right}`)}} resizeMode='contain' style={{ position: 'absolute', right: 0, bottom: -5 }} w='50%' height='70%' alt='right' /> */}
    </Container>
  );
}
