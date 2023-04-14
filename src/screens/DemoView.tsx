import {
  ArrowBackIcon,
  ArrowForwardIcon,
  Center,
  Fab,
} from "native-base";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useProperty } from "../foam-kit/hooks";

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
    <Center h="full" bg="darkBlue.900">
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
    </Center>
  );
}
