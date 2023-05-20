import {
  ArrowBackIcon,
  ArrowForwardIcon,
  Box,
  Center,
  Container,
  Fab,
  ScrollView,
  View,
} from "native-base";
import React, { useContext } from "react";
import { AppContext, actions } from "../context/AppContext";
import { useProperty } from "../foam-kit/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomActionBar from "../components/Combat/BottomActionBar";

export default function DemoView({ navigation }) {
  const { state, dispatch } = useContext(AppContext);

  const restartFlow = () => {
    navigation.navigate("Home");
    dispatch({ action: actions.clearDemo });
  };

  const [currentStepIndex] = useProperty({
    value: state.currentFlow,
    property: "currentStep",
  });
  const [steps] = useProperty({
    value: state.currentFlow,
    property: "steps",
  });
  const step = steps[currentStepIndex];

  return (
    <Box h="full" w="full" bg="darkBlue.900" style={{ position: "relative" }}>
      <Fab
        renderInPortal={false}
        placement="top-left"
        shadow={2}
        size="lg"
        icon={<MaterialCommunityIcons name="backup-restore" color="white" size={28} />}
        onPress={restartFlow}
      />
      <Fab
        placement="top-right"
        renderInPortal={false}
        shadow={2}
        size="lg"
        icon={<MaterialCommunityIcons name="skip-next" color="white" size={28} />}
      />
      {step.value.toElement()}
    </Box>
  );
}
