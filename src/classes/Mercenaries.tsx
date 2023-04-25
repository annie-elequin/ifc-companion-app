import React from "react";
import {
  AspectRatio,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  View,
} from "native-base";
import { createFoamClass } from "../foam-kit/model";
import { UnitClass } from "./abstract";
import { useProperty } from "../foam-kit/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

const FoulbornClass = createFoamClass({
  name: "Foulborn",
  inherits: UnitClass,
  properties: [
    {
      name: "health",
      type: "number",
      value: 12,
    },
    {
      name: "image",
      type: "image",
      value: require("../assets/combat/foulborn.png"),
    },
    {
      name: "maxHealth",
      type: "number",
      value: 12,
    },
  ],
  methods: [
    {
      name: "toElement",
      code: function () {
        return React.createElement(
          function ({ value }) {
            return <MercenaryView value={value} />;
          },
          { value: this }
        );
      },
    },
  ],
});

const DreyaClass = createFoamClass({
  name: "Dreya",
  inherits: UnitClass,
  properties: [
    {
      name: "health",
      type: "number",
      value: 10,
    },
    {
      name: "image",
      type: "image",
      value: require("../assets/combat/dreya.png"),
    },
    {
      name: "maxHealth",
      type: "number",
      value: 10,
    },
  ],
  methods: [
    {
      name: "toElement",
      code: function () {
        return React.createElement(
          function ({ value }) {
            return <MercenaryView value={value} />;
          },
          { value: this }
        );
      },
    },
  ],
});

const CassiusClass = createFoamClass({
  name: "Cassius",
  inherits: UnitClass,
  properties: [
    {
      name: "health",
      type: "number",
      value: 9,
    },
    {
      name: "image",
      type: "string",
      value: require("../assets/combat/cassius.png"),
    },
    {
      name: "maxHealth",
      type: "number",
      value: 9,
    },
  ],
  methods: [
    {
      name: "toElement",
      code: function () {
        return React.createElement(
          function ({ value }) {
            return <MercenaryView value={value} />;
          },
          { value: this }
        );
      },
    },
  ],
});

const ScourgeClass = createFoamClass({
  name: "Scourge",
  inherits: UnitClass,
  properties: [
    {
      name: "health",
      type: "number",
      value: 14,
    },
    {
      name: "image",
      type: "string",
      value: require("../assets/combat/scourge.png"),
    },
    {
      name: "maxHealth",
      type: "number",
      value: 14,
    },
  ],
  methods: [
    {
      name: "toElement",
      code: function () {
        return React.createElement(
          function ({ value }) {
            return <MercenaryView value={value} />;
          },
          { value: this }
        );
      },
    },
  ],
});

function MercenaryView({ value }) {
  const [image] = useProperty({ value, property: "image" });
  const [health] = useProperty({ value, property: "health" });
  const [maxHealth] = useProperty({ value, property: "maxHealth" });
  const [isSelected] = useProperty({ value, property: "isSelected" });

  const healthPercentage = (health / maxHealth) * 100;

  const onSelectedChange = (val) => {
    value.isSelected = val;
  };
  return (
    <View flexDirection="column" 
    margin={"2"}
    borderBottomLeftRadius={20}
    borderBottomRightRadius={20}
    overflow={'hidden'}
    >
      <View
        w="500"
        h="150"
        bgColor="darkBlue.800"
        borderColor="cyan.200"
        borderWidth={3}
        display="flex"
        flexDirection="row"
        borderRadius={20}
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
        overflow="hidden"
        style={{ position: "relative" }}
      >
        <AspectRatio ratio={1}>
          <Image w="100%" h="100%" source={{ uri: image }} alt="mercenary" />
        </AspectRatio>
        <Checkbox
          value={isSelected}
          onValueChange={onSelectedChange}
          color="darkcyan"
          style={{
            width: 40,
            height: 40,
            zIndex: 2,
            position: "absolute",
            top: 10,
            right: 10,
          }}
        />
        <VStack p="1%" w="40%" h="100%" justifyContent="space-between">
          <HStack>
            {/* <HStack alignItems="center">
                    <Icon as={<MaterialCommunityIcons name="shield" />} color="#333BFF" size="5xl"/>
                    <Text bold fontSize="5xl" color="#000000">5</Text>
                </HStack>
                <HStack alignItems="center">
                    <Icon as={<MaterialCommunityIcons name="arm-flex" />} color="#fff64a" size="5xl"/>
                    <Text bold fontSize="5xl" color="#000000">2</Text>
                </HStack> */}
          </HStack>
        </VStack>
      </View>
      <View width="full" height={10} bg='coolGray.800' position={'relative'}>
        <View width={`${healthPercentage}%`} height={10} bg='red.700' />
        <Text justifyContent={'center'} alignItems={'center'} textAlign={'center'} fontSize={24} position={'absolute'} top={0} left={0} right={0} bottom={0}>{health} / {maxHealth}</Text>
      </View>
    </View>
  );
}

export { FoulbornClass, DreyaClass, ScourgeClass, CassiusClass };
