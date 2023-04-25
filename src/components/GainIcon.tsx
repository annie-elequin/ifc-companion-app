import React from "react";
import { Box, Circle, Icon, Pressable, Text, VStack, View } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useProperty } from "../foam-kit/hooks";

export default function GainIcon({ value, callback }) {
  const [icon] = useProperty({ value, property: "icon" });
  const [color] = useProperty({ value, property: "color" });
  const [amount] = useProperty({ value, property: "amount" });

  const circleSize = 70;
  const circleMargin = circleSize / 70;
  const iconSize = circleSize / 2;

  const increase = () => {
    value.amount = amount + 1;
  }
  const decrease = () => {
    if (value.amount > 0) {
      value.amount = amount - 1;
    }
  }

  // const onPress = () => {
  //   callback();
  // }

  return (
    <Box
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      bg="darkBlue.800"
      borderRadius={200}
      margin="2"
      style={{ width: 200, height: 80, paddingLeft: 20 }}
    >
      <Icon
        as={<MaterialCommunityIcons name={icon} />}
        color={color}
        size="5xl"
      />
      <VStack h="full" w="20%" bg="amber.200" style={{ marginLeft: 15 }}>
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
      </VStack>
      <Box flex="1" textAlign={"center"}>
        <Text bold style={{ fontSize: 36 }}>
          {amount}
        </Text>
      </Box>
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
