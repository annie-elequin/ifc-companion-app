import {
  ArrowBackIcon,
  ArrowForwardIcon,
  Center,
  Fab,
} from "native-base";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useProperty } from "../foam-kit/hooks";

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

  return (
    <Center h="full" bg="darkBlue.900">
      <Fab
        renderInPortal={false}
        placement="top-left"
        shadow={2}
        size="sm"
        icon={<ArrowBackIcon/>}
      />
      <Fab
        placement="top-right"
        renderInPortal={false}
        shadow={2}
        size="sm"
        icon={<ArrowForwardIcon/>}
      />
      {step.value.toElement()}
    </Center>
  );
}
