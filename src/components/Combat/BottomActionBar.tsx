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
  const respawnUnits = () => {
    mercenaries.forEach(m => {
      if (m.isSelected) {
          m.respawn();
      }
    })
    monsters.forEach(m => {
      if (m.isSelected) {
          m.respawn();
      }
    })
  };
  const respawnAll = () => {
    mercenaries.forEach(m => m.respawn())
    monsters.forEach(m => m.respawn())
  };
  const nextRound = () => {
    mercenaries.forEach(m => m.onTurn())
    monsters.forEach(m => m.onTurn())
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
        style={{ width: 300, height: 80 }}
        rounded="full"
        onPress={respawnUnits}
      >
        <Heading>Respawn Selected</Heading>
      </Button>
      <Button
        style={{ width: 200, height: 80 }}
        rounded="full"
        onPress={respawnAll}
      >
        <Heading>Respawn All</Heading>
      </Button>
      <Button
        style={{ width: 200, height: 80 }}
        rounded="full"
        onPress={nextRound}
      >
        <Heading>Next Round</Heading>
      </Button>
    </Box>
  );
}
