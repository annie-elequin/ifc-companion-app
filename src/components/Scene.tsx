import { Box, Center, Image, Text } from "native-base";
import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { useProperty } from "../foam-kit/hooks";
import { AppContext } from "../context/AppContext";
import { Audio } from "expo-av";

export const Scene = ({ value }) => {
  const [stepValue] = useProperty({ value, property: "currentStep" });
  const [steps] = useProperty({ value, property: "steps" });

  const audio = useRef<any>();

  const currentStep = steps[stepValue];

  const playAudioForStep = async () => {
    const { sound } = await Audio.Sound.createAsync(currentStep.audio);
    audio.current = sound;
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync();
        value.nextStep();
      }
    });
  };

  useEffect(() => {
    playAudioForStep();
    return () => {
      audio?.current?.unloadAsync();
    };
  }, [currentStep]);

  return (
    <>
      <Image
        source={{ uri: currentStep.bg }}
        resizeMode="cover"
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        alt="bg"
      />
      <Image
        source={{
          uri: currentStep.left,
        }}
        resizeMode="contain"
        style={{ position: "absolute", left: 0, bottom: 0 }}
        w="68%"
        height="85%"
        alt="left"
        {...currentStep.leftProps}
      />
      <Image
        source={{
          uri: currentStep.right,
        }}
        resizeMode="contain"
        style={{ position: "absolute", right: 0, bottom: 0 }}
        w="60%"
        height="74%"
        alt="right"
        {...currentStep.rightProps}
      />
      <Center
        width="100%"
        backgroundColor={"rgba(12, 91, 144, .7)"}
        height="28%"
        borderWidth={10}
        borderRadius={12}
        borderColor={"#6ac3ff"}
        padding="20"
        position={"absolute"}
        bottom={0}
        left={0}
      >
        <Text textAlign={"center"} fontSize={'4xl'}>{currentStep.caption}</Text>
      </Center>
    </>
  );
};
