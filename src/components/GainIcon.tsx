import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  Circle,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
  View,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useProperty } from "../foam-kit/hooks";
import {
  Tooltip,
} from 'react-tippy';
import {View as RNView, Pressable as RNPressable, Text as RNText} from 'react-native'
// import Tooltip from 'rn-tooltip';

function Popover({increase, decrease}) {

  const pressableStyle = ({pressed}) => {
    return {
      backgroundColor: '#7F5CFF', flex: 1, justifyContent: 'center', alignItems: 'center', opacity: pressed ? .5 : 1
    }
  }

  return (
    <RNView style={{ width: 80, height: 120, backgroundColor: '#00000080', borderWidth: 3, borderColor: '#7F5CFF',  marginLeft: 20, padding: 8 }}>
      <RNPressable style={pressableStyle} onPress={increase}>
        <RNText style={{ color: 'white', fontSize: 40, fontWeight: 'bold' , textAlign: 'center', marginBottom: 4 }}>+</RNText>
      </RNPressable>
      <RNView style={{ height: 8 }} />
      <RNPressable style={pressableStyle} onPress={decrease}>
        <RNText style={{ color: 'white', fontSize: 40, fontWeight: 'bold' , textAlign: 'center', marginBottom: 4 }}>-</RNText>
      </RNPressable>
    </RNView>
  )
}

export default function GainIcon({ value, callback }) {
  const [icon] = useProperty({ value, property: "icon" });
  const [color] = useProperty({ value, property: "color" });
  const [amount] = useProperty({ value, property: "amount" });

  const circleSize = 70;
  const circleMargin = circleSize / 70;
  const iconSize = circleSize / 2;

  const increase = () => {
    value.amount = amount + 1;
  };
  const decrease = () => {
    if (value.amount > 0) {
      value.amount = amount - 1;
    }
  };

  // const onPress = () => {
  //   callback();
  // }

  return (
    <Box
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={200}
      style={{ position: "relative", width: 180, height: 100 }}
    >
      <AspectRatio
        ratio={611 / 452}
        height={100}
        position="absolute"
        zIndex={0}
      >
        <Image
          w="100%"
          h="100%"
          source={{ uri: require("../assets/img/gainIconBackground.png") }}
          alt="Gain Icon"
        />
      </AspectRatio>
    <Tooltip html={<Popover increase={increase} decrease={decrease} />} position="right" trigger="click" interactive offset={-20} arrow>
      <HStack zIndex={2} marginBottom="4" padding='2'>
        <Icon
          as={<MaterialCommunityIcons name={icon} />}
          color={color}
          size="5xl"
        />
        <Box width={50} textAlign={"left"} marginLeft="4">
          <Text
            bold
            style={{ fontSize: 30 }}
            fontFamily={"Orbitron_400Regular"}
          >
            {amount}
          </Text>
        </Box>
      </HStack>
      </Tooltip>
      

      {/* <VStack h="full" w="20%" bg="amber.200" style={{ marginLeft: 15 }}>
        <Pressable flex="1" onPress={increase}>
          {({ isHovered, isFocused, isPressed }) => (
            <Box
              flex="1"
              alignItems={"center"}
              justifyContent={"center"}
              style={{ opacity: isPressed ? 0.5 : 1, backgroundColor: "red" }}
            >
              <MaterialCommunityIcons name="plus" color='white' size={24} />
            </Box>
          )}
        </Pressable>
        <Pressable flex="1" onPress={decrease}>
          {({ isHovered, isFocused, isPressed }) => (
            <Box
              flex="1"
              alignItems={"center"}
              justifyContent={"center"}
              style={{ opacity: isPressed ? 0.5 : 1, backgroundColor: "blue" }}
            >
              <MaterialCommunityIcons name='minus' color='white' size={24} />
            </Box>
          )}
        </Pressable>
      </VStack> */}
    </Box>
  );

  // return(
  //     <Pressable onPress={callback}>
  //         <Circle m={circleMargin} size={circleSize} bg="white">
  //             <Icon as={<MaterialCommunityIcons name={icon} />} color={color} size={iconSize}/>
  //         </Circle>
  //     </Pressable>
  // )
}
