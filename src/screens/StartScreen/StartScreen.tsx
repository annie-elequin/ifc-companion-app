import { Box, Button, Center, Heading } from "native-base";
import React, { useContext } from "react";
import { AppContext, actions } from "../../context/AppContext";
import Background from "../../assets/background";
import { DemoOne } from "../../classes/flows/Demo1";
import { DemoTwo } from "../../classes/flows/Demo2";
import { DemoThree } from "../../classes/flows/Demo3";
import { DemoFour } from "../../classes/flows/Demo4";

const demos = [
  { key: 'one', label: 'FC / A.R.M.', flow: DemoOne },
  { key: 'two', label: 'FC / Bees', flow: DemoTwo },
  { key: 'three', label: 'DS / A.R.M.', flow: DemoThree },
  { key: 'four', label: 'DS / Bees', flow: DemoFour },
]

export default function StartScreen({ navigation }) {
  const { dispatch } = useContext(AppContext);

  const onSelectDemo = (demo) => {
      navigation.navigate("DemoView");
      dispatch({
        action: actions.startDemo,
        payload: {
          demo: demo.key,
          flow: demo.flow,
        },
      });
  };

  return (
    <Center h="full" bg="darkBlue.900" position={"relative"}>
      <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
        <Background />
      </Box>
      <Center zIndex={1}>
        <Heading mb="16" fontFamily={"Orbitron_700Bold"}>
          Interstellar Fight Club
        </Heading>
        {demos.map(d => (
            <Button
              onPress={() => onSelectDemo(d)}
              mb="8"
              w="300"
              h="100"
              rounded="full"
            >
              <Heading fontFamily={"Orbitron_700Bold"}>{d.label}</Heading>
            </Button>
        ))}
      </Center>
    </Center>
  );
}
