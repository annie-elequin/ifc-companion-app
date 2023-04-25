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
        style={{ width: 200, height: 80 }}
        rounded="full"
      >
        <Heading>Next Turn</Heading>
      </Button>
    </Box>
  );
}
