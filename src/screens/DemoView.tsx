import { ArrowBackIcon, Button, Center, Container, Fab, Heading, Image } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useProperty } from '../foam-kit/hooks';
import { Audio } from 'expo-av';

export default function DemoView({ navigation }) {
    const {state} = useContext(AppContext)
    if (!state.currentFlow) {
        navigation.navigate('Home')
    }
    const [stepValue] = useProperty({ value: state.currentFlow, property: 'currentStep' })
    const [steps] = useProperty({ value: state.currentFlow, property: 'steps' })
    const [route] = useProperty({ value: state.currentFlow, property: 'route' })

    const [audio, setAudio] = useState(null)

    const currentStep = steps[stepValue];

    console.log({currentFlow: state.currentFlow})

    const playAudioForStep = async () => {
        const { sound } = await Audio.Sound.createAsync( require(`../assets/scenes/demoOne/sceneOne/${currentStep.audio}`)
        );
        setAudio(sound);
        await sound.playAsync();
        sound.setOnPlaybackStatusUpdate(status => {
          if (status.didJustFinish) {
              sound.unloadAsync();
              state.currentFlow.nextStep();
          }
        })
    }

    useEffect(() => {
      playAudioForStep();
    }, [currentStep])
    return (
        <Container maxW='full' w='full' h='full' style={{ position: 'relative' }} bg='darkBlue.900'>
          <Heading>Demo One</Heading>
          <Fab renderInPortal={false} shadow={2} left={3} top={3} right='unset' bottom='unset' size="md" icon={<ArrowBackIcon />} />
          <Image source={{ uri: require('../assets/scenes/demoOne/sceneOne/bg.jpg')}} resizeMode='cover' style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} alt='bg' />
          <Image source={{ uri: require(`../assets/scenes/demoOne/sceneOne/${currentStep.left}`)}} resizeMode='contain' style={{ position: 'absolute', left: 0, bottom: -10 }} w='50%' height='70%' alt='left' />
          <Image source={{ uri: require(`../assets/scenes/demoOne/sceneOne/${currentStep.right}`)}} resizeMode='contain' style={{ position: 'absolute', right: 0, bottom: -5 }} w='50%' height='70%' alt='right' />
        </Container>
    );
}
