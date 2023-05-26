import { Box, Center, Image, Pressable, Text } from "native-base";
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
        nextStep();
      }
    });
  };

  const nextStep = () => {
    audio.current.unloadAsync();
    value.nextStep();
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
        style={{ position: "absolute", left: 0 }}
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
        style={{ position: "absolute", right: 0 }}
        w="60%"
        height="74%"
        alt="right"
        {...currentStep.rightProps}
      />
      <Box bg='darkBlue.300' position='absolute' w='100%' height='25px' left={0} bottom={0} />
      <Pressable
        onPress={nextStep}
        width="100%"
        height="28%"
        position={"absolute"}
        bottom={0}
        left={0}
      >
        <Center
          width="100%"
          backgroundColor={"rgba(12, 91, 144, .7)"}
          height="100%"
          borderWidth={10}
          borderRadius={12}
          borderColor={"#6ac3ff"}
          padding="20"
        >
          <Text textAlign={"center"} fontSize={"3xl"}>
            {currentStep.caption}
          </Text>
        </Center>
      </Pressable>
    </>
  );
};
