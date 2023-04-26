import { Box, Button, Center, Heading } from "native-base";
import React, { useContext } from "react";
import { AppContext, actions } from "../../context/AppContext";
import { DemoOne } from "../../classes/flows";
import Background from "../../assets/background";

export default function StartScreen({ navigation }) {
  const { dispatch } = useContext(AppContext);

  const onSelectDemo = (key) => {
    if (key === "one") {
      navigation.navigate("DemoView");
      dispatch({
        action: actions.startDemo,
        payload: {
          demo: "one",
          flow: DemoOne,
        },
      });
    } else if (key === "two") {
      alert("Demo Two not ready yet");
      // navigation.navigate('DemoTwoScene');
      // dispatch({
      //   action: actions.startDemo,
      //   payload: {
      //     demo: 'two',
      //     flow: DemoTwoFlow,
      //   }
      // })
    }
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
        <Button
          onPress={() => onSelectDemo("one")}
          mb="8"
          w="300"
          h="100"
          rounded="full"
        >
          <Heading fontFamily={"Orbitron_700Bold"}>Demo One</Heading>
        </Button>
        <Button
          onPress={() => onSelectDemo("two")}
          w="300"
          h="100"
          rounded="full"
        >
          <Heading fontFamily={"Orbitron_700Bold"}>Demo Two</Heading>
        </Button>
      </Center>
    </Center>
  );
}
