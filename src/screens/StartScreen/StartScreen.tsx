import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Text,
  VStack,
} from "native-base";
import React, { useContext, useState } from "react";
import { AppContext, actions } from "../../context/AppContext";
import Background from "../../assets/background";
import { DemoOne, DemoOneClass } from "../../classes/flows/Demo1";
import { DemoTwo } from "../../classes/flows/Demo2";
import { DemoThree } from "../../classes/flows/Demo3";
import { DemoFour } from "../../classes/flows/Demo4";
import Checkbox from "expo-checkbox";
import { DemoOneCombatClass } from "../../classes/Demo1/DemoOneCombat";
import { ArmadillosClass } from "../../classes/Monsters";
import { monsterColors } from "../../util/monsterColors";
import { CassiusClass, DreyaClass, FoulbornClass, ScourgeClass } from "../../classes/Mercenaries";

const demos = [
  { key: "one", label: "FC / A.R.M.", flow: DemoOne },
  { key: "two", label: "FC / Bees", flow: DemoTwo },
  { key: "three", label: "DS / A.R.M.", flow: DemoThree },
  { key: "four", label: "DS / Bees", flow: DemoFour },
];

export default function StartScreen({ navigation }) {
  const { dispatch } = useContext(AppContext);
  const [playerValue, setPlayerValue] = useState({});

  const onStartDemo = () => {
    const numPlayers = Object.keys(playerValue)?.length;
    if (numPlayers <= 1) {
      alert("Two players required");
      return;
    }
    navigation.navigate("DemoView");
    dispatch({
      action: actions.startDemo,
      payload: {
        demo: "one",
        flow: new DemoOneClass({
          steps: [
            {
              type: "combat",
              value: new DemoOneCombatClass({
                mercenaries: [
                  ...(playerValue['foulborn'] ? [new FoulbornClass({ id: 'f' })] : []),
                  ...(playerValue['cassius'] ? [new CassiusClass({ id: 'c' })] : []),
                  ...(playerValue['dreya'] ? [new DreyaClass({ id: 'd' })] : []),
                  ...(playerValue['scourge'] ? [new ScourgeClass({ id: 's' })] : []),
                ],
                monsters: [
                  new ArmadillosClass({
                    id: "1",
                    borderColor: monsterColors["1"],
                  }),
                  new ArmadillosClass({
                    id: "2",
                    borderColor: monsterColors["2"],
                  }),
                  new ArmadillosClass({
                    id: "3",
                    borderColor: monsterColors["3"],
                  }),
                  new ArmadillosClass({
                    id: "4",
                    borderColor: monsterColors["4"],
                  }),
                  ...(numPlayers >= 3
                    ? [
                        new ArmadillosClass({
                          id: "5",
                          borderColor: monsterColors["5"],
                        }),
                      ]
                    : []),
                  ...(numPlayers >= 4
                    ? [
                        new ArmadillosClass({
                          id: "6",
                          borderColor: monsterColors["6"],
                        }),
                      ]
                    : []),
                ],
              }),
            },
          ],
        }),
      },
    });
  };

  const onPlayerChange = (label, value) => {
    const newPlayerValue = { ...playerValue };
    if (newPlayerValue[label]) {
      delete newPlayerValue[label];
    } else {
      newPlayerValue[label] = true;
    }
    setPlayerValue(newPlayerValue);
  };

  return (
    <Center h="full" bg="darkBlue.900" position={"relative"}>
      <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
        <Background />
      </Box>
      <Center zIndex={1}>
        <Heading mb="16" fontFamily={"Orbitron_700Bold"}>
          Interstellar Fight Club (v0.1)
        </Heading>

        <HStack>
          <VStack padding="1">
            {["foulborn", "cassius"].map((l) => (
              <PlayerCheckbox
                key={l}
                label={l}
                isSelected={!!playerValue[l]}
                onValueChange={(val) => onPlayerChange(l, val)}
              />
            ))}
          </VStack>
          <VStack padding="1">
            {["dreya", "scourge"].map((l) => (
              <PlayerCheckbox
                key={l}
                label={l}
                isSelected={!!playerValue[l]}
                onValueChange={(val) => onPlayerChange(l, val)}
              />
            ))}
          </VStack>
        </HStack>

        <Button
          onPress={() => onStartDemo()}
          marginTop="8"
          w="300"
          h="100"
          rounded="full"
        >
          <Heading fontFamily={"Orbitron_700Bold"}>Start</Heading>
        </Button>
      </Center>
    </Center>
  );
}

function PlayerCheckbox({ label = "", isSelected, onValueChange }) {
  return (
    <HStack
      padding="5"
      alignItems={"center"}
      borderWidth={2}
      borderColor="red.500"
      marginBottom={"3"}
      borderRadius="20"
    >
      <Checkbox
        value={isSelected}
        onValueChange={onValueChange}
        color="darkcyan"
        style={{
          width: 80,
          height: 80,
          zIndex: 2,
        }}
      />
      <Text fontSize={"4xl"} marginLeft={"2"}>
        {label}
      </Text>
    </HStack>
  );
}
