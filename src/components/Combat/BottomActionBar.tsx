import { Box, Button, Heading, Pressable } from "native-base";
import React from "react";

export default function BottomActionBar({ gains, mercenaries, monsters }) {
  const clearGains = () => {
    gains.forEach((g) => {
      console.log(g);
    });
  };
  const applyGains = () => {
    gains.forEach((g) => {
      if (g.amount > 0) {
        g.applyGainToUnits(mercenaries, monsters);
      }
      g.amount = 0;
    });
    mercenaries.forEach(m => m.isSelected = false)
    monsters.forEach(m => m.isSelected = false)
  };
  const resetUnits = () => {
    mercenaries.forEach(m => {
      if (m.isSelected) {
          m.reset();
      }
    })
    monsters.forEach(m => {
      if (m.isSelected) {
          m.reset();
      }
    })
  };
  const resetAll = () => {
    mercenaries.forEach(m => m.reset())
    monsters.forEach(m => m.reset())
  };
  return (
    <Box
      bg="darkBlue.800"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "10%",
      }}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDirection={"row"}
      paddingLeft={6}
      paddingRight={6}
    >
      <Button
        onPress={clearGains}
        style={{ width: 200, height: 80 }}
        rounded="full"
      >
        <Heading>Clear</Heading>
      </Button>
      <Button
        onPress={applyGains}
        style={{ width: 200, height: 80 }}
        rounded="full"
      >
        <Heading>Confirm</Heading>
      </Button>
      <Button
        style={{ width: 250, height: 80 }}
        rounded="full"
        onPress={resetUnits}
      >
        <Heading>Reset Selected</Heading>
      </Button>
      <Button
        style={{ width: 200, height: 80 }}
        rounded="full"
        onPress={resetAll}
      >
        <Heading>Reset All</Heading>
      </Button>
    </Box>
  );
}
