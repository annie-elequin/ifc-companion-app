import React from "react";
import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Text,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useProperty } from "../../foam-kit/hooks";
import { Tooltip } from 'react-tippy';
import GainPopover from "./GainPopover";

export default function GainIcon({ value }) {
  const [icon] = useProperty({ value, property: "icon" });
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
      style={{ position: "relative", width: 180, height: 90 }}
    >
      <AspectRatio
        ratio={611 / 452}
        height={90}
        position="absolute"
        zIndex={0}
      >
        <Image
          w="100%"
          h="100%"
          source={{ uri: require("../../assets/img/gainIconBackground.png") }}
          alt="Gain Icon Background"
        />
      </AspectRatio>
      <Tooltip html={<GainPopover increase={increase} decrease={decrease} />} position="right" trigger="click" interactive offset={-20} arrow>
        <HStack zIndex={2} marginBottom="4" padding='2'>
          <Image marginLeft="2"
            w="10"
            h="10"
            source={{ uri: icon }}
            alt="Gain Icon"
          />
          <Box width={50} textAlign={"left"} marginLeft="2">
            <Text
              bold
              style={{ fontSize: 25 }}
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
