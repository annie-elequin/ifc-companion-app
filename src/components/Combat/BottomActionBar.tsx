import { Box, Button, Heading, Pressable } from "native-base";
import React from "react";

export default function BottomActionBar({ gains, mercenaries, monsters }) {
  const clearGains = () => {
    gains.forEach((g) => {
      g.amount = 0;
    });
  };
  const applyGains = () => {
    gains.forEach((g) => {
      if (g.amount > 0) {
        g.applyGainToUnits(mercenaries, monsters);
      }
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
    mercenaries.forEach(m => m.onNextRound())
    monsters.forEach(m => m.onNextRound())
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
        style={{ width: '10%', height: 60 }}
        rounded="full"
      >
        <Heading fontSize={'2xl'}>Clear</Heading>
      </Button>
      <Button
        onPress={applyGains}
        style={{ width: '10%', height: 60 }}
        rounded="full"
      >
        <Heading fontSize={'2xl'}>Confirm</Heading>
      </Button>
      <Button
        style={{ width: '15%', height: 60 }}
        rounded="full"
        onPress={respawnUnits}
      >
        <Heading fontSize={'2xl'}>Respawn Selected</Heading>
      </Button>
      <Button
        style={{ width: '10%', height: 60 }}
        rounded="full"
        onPress={respawnAll}
      >
        <Heading fontSize={'2xl'}>Respawn All</Heading>
      </Button>
      <Button
        style={{ width: '10%', height: 60 }}
        rounded="full"
        onPress={nextRound}
      >
        <Heading fontSize={'2xl'}>Next Round</Heading>
      </Button>
    </Box>
  );
}
