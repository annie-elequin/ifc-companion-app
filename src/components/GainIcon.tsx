import React from "react";
import {
  AspectRatio,
  Box,
  HStack,
  Icon,
  Image,
  Text,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useProperty } from "../foam-kit/hooks";
import { Tooltip } from 'react-tippy';
import { View as RNView, Pressable as RNPressable, Text as RNText} from 'react-native'

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

export default function GainIcon({ value }) {
  const [icon] = useProperty({ value, property: "icon" });
  const [color] = useProperty({ value, property: "color" });
  const [amount] = useProperty({ value, property: "amount" });

  const increase = () => {
    value.amount = amount + 1;
  };

  const decrease = () => {
    if (value.amount > 0) {
      value.amount = amount - 1;
    }
  };

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
    </Box>
  );
}
