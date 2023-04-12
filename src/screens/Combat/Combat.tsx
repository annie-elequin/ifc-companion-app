import { Image } from "native-base";
import React, { FC, useContext, useEffect, useState } from "react";
import { useProperty } from "../../foam-kit/hooks";
import { AppContext } from "../../context/AppContext";
import { Audio } from "expo-av";

export const Combat = ({ value }) => {
  const { state } = useContext(AppContext);

  const [stepValue] = useProperty({ value, property: "currentStep" });
  const [steps] = useProperty({ value, property: "steps" });
  const [route] = useProperty({ value, property: "route" });

  const [audio, setAudio] = useState(null);

  const currentStep = steps[stepValue];

  const playAudioForStep = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require(`../assets/scenes/demoOne/sceneOne/${currentStep.audio}`)
    );
    setAudio(sound);
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync();
        state.currentFlow.nextStep();
      }
    });
  };

  useEffect(() => {
    playAudioForStep();
    return () => {
      audio.unloadAsync();
    }
  }, [currentStep]);

  const url = `../assets/scenes/${route}`

  return (
    <>
      <Image
        source={{ uri: require(`${url}/bg.jpg`) }}
        resizeMode="cover"
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        alt="bg"
      />
      <Image
        source={{
          uri: require(`${url}/${currentStep.left}`),
        }}
        resizeMode="contain"
        style={{ position: "absolute", left: 0, bottom: -10 }}
        w="50%"
        height="70%"
        alt="left"
      />
      <Image
        source={{
          uri: require(`${url}/${currentStep.right}`),
        }}
        resizeMode="contain"
        style={{ position: "absolute", right: 0, bottom: -5 }}
        w="50%"
        height="70%"
        alt="right"
      />
    </>
  );
};
