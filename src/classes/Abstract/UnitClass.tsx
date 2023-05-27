import React, { useContext } from "react";
import {
  AspectRatio,
  Box,
  FlatList,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
  View,
} from "native-base";
import Checkbox from "expo-checkbox";
import { createFoamClass } from "../../foam-kit/model";
import { useProperty } from "../../foam-kit/hooks";
import { AppContext } from "../../context/AppContext";
import { Pressable as RNPressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const UnitClass = createFoamClass({
  name: "UnitClass",
  properties: [
    {
      name: "id",
      type: "string",
    },
    {
      name: "borderColor",
      type: "string",
    },
    {
      name: "health",
      type: "number",
      value: 0,
    },
    {
      name: "block",
      type: "number",
      value: 0,
    },
    {
      name: "poison",
      type: "number",
      value: 0,
    },
    {
      name: "wound",
      type: "number",
      value: 0,
    },
    {
      name: "disarm",
      type: "number",
      value: 0,
    },
    {
      name: "pin",
      type: "number",
      value: 0,
    },
    {
      name: "pain",
      type: "number",
      value: 0,
    },
    {
      name: "blind",
      type: "number",
      value: 0,
    },
    {
      name: "isDead",
      type: "boolean",
      value: false,
    },
    {
      name: "maxHealth",
      type: "number",
      value: 0,
    },
    {
      name: "image",
      type: "image",
      value: require("../../assets/combat/unit-placeholder.webp"),
    },
    {
      name: "isSelected",
      type: "boolean",
      value: false,
    },
    {
      name: "isActive",
      type: "boolean",
      value: true,
    },
  ],
  methods: [
    {
      name: "setActive",
      code: function (active) {
        this.isActive = active;

        if (!active) {
          this.procPoison();
          this.modifyGain("pin", -1);
          this.modifyGain("disarm", -1);
          this.modifyGain("blind", -1);
        }
      },
    },
    {
      name: "respawn",
      code: function () {
        this.health = this.maxHealth;
        this.block = 0;
        this.poison = 0;
        this.wound = 0;
        this.disarm = 0;
        this.pin = 0;
        this.pain = 0;
        this.blind = 0;
        this.isDead = false;
        this.isSelected = false;
      },
    },
    {
      name: "onTurn",
      code: function () {
        this.modifyGain("disarm", -1);
        this.modifyGain("pin", -1);
        this.modifyGain("blind", -1);
        this.procPoison();
        this.isActive = true;
      },
    },
    {
      name: "onNextRound",
      code: function () {
        this.block = 0;
        this.disarm = 0;
        this.pin = 0;
        this.pain = 0;
        this.blind = 0;
        this.procPoison();
        this.isActive = true;
      },
    },
    {
      name: "procPoison",
      code: function () {
        if (this.poison > 0) {
          this.modifyGain("health", -this.poison);
          this.modifyGain("poison", -1);
        }
      },
    },
    {
      name: "doDamage",
      code: function (amount, pierce = false) {
        if (this.block > 0 && !pierce) {
          if (this.block < amount) {
            const remaining = amount - this.block;
            this.modifyGain("health", -remaining);
          }

          this.modifyGain("block", -amount);
        } else {
          this.modifyGain("health", -amount);
        }
      },
    },
    {
      name: "modifyGain",
      code: function (gain, amount, callback = undefined) {
        const originalValue = this[gain];
        this[gain] += amount;
        const delta = originalValue - this[gain];
        if (this[gain] < 0) {
          this[gain] = 0;
        }
        console.log(
          gain,
          " adjusted by ",
          delta,
          ", final value: ",
          this[gain]
        );
      },
    },
    {
      name: "toElement",
      code: function () {
        return React.createElement(
          function ({ value }) {
            return <UnitView value={value} />;
          },
          { value: this }
        );
      },
    },
  ],
  actions: [],
});

function UnitView({ value }) {
  const [borderColor] = useProperty({ value, property: "borderColor" });
  const [image] = useProperty({ value, property: "image" });
  const [health] = useProperty({ value, property: "health" });
  const [maxHealth] = useProperty({ value, property: "maxHealth" });
  const [isSelected] = useProperty({ value, property: "isSelected" });
  const [isActive] = useProperty({ value, property: "isActive" });
  const [id] = useProperty({ value, property: "id" });

  const { state } = useContext(AppContext);

  const healthPercentage = (health / maxHealth) * 100;

  const onSelectedChange = (val) => {
    value.isSelected = val;
  };

  const onActiveChanged = () => {
    value.setActive(!value.isActive);
  };

  const applyGains = () => {
    const combat = state.currentFlow.steps[state.currentFlow.currentStep];
    const { gains, mercenaries, monsters } = combat.value;
    gains.forEach((g) => {
      if (g.amount !== 0) {
        g.applyGainToUnits(mercenaries, monsters, id);
        g.amount = 0;
      }
    });
  };

  const combat = state.currentFlow.steps[state.currentFlow.currentStep];
  const gainsToListOnUnit = [...combat.value.gains].filter((g) => g.showOnUnit);

  return (
    <View
      flexDirection="column"
      borderBottomLeftRadius={20}
      borderBottomRightRadius={20}
      overflow={"hidden"}
    >
      <View
        w="40vw"
        h="14vh"
        bgColor="black"
        display="flex"
        flexDirection="row"
        borderRadius={20}
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
        overflow="hidden"
        style={{ position: "relative" }}
      >
        <AspectRatio ratio={1}>
          <Pressable onPress={onActiveChanged}>
            <Image
              w="100%"
              h="100%"
              source={{ uri: image }}
              alt="mercenary"
              borderColor={borderColor ?? "transparent"}
              borderWidth={7}
              borderTopLeftRadius={12}
              borderTopRightRadius={12}
              style={{ opacity: isActive ? 1 : 0.5 }}
            />
          </Pressable>
        </AspectRatio>
        {id && (
          <Text
            bold
            fontSize="xl"
            color="#FFFFFF"
            margin=".5"
            position={"absolute"}
            style={{ top: -2, left: -2, width: 30, textAlign: "center" }}
            bg="black"
          >
            {id}
          </Text>
        )}

        <RNPressable
          onPress={applyGains}
          style={({ pressed }) => ({
            width: 50,
            height: 50,
            zIndex: 2,
            position: "absolute",
            top: 10,
            right: 55,
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <Icon
            as={<MaterialCommunityIcons name="check-circle" />}
            color="green.500"
            size="4xl"
          />
        </RNPressable>
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
        <VStack p="1%" w="70%" h="100%" justifyContent="space-between">
          <FlatList
            data={gainsToListOnUnit}
            numColumns={3}
            renderItem={({ item, index }) => (
              <Box key={index} style={{ margin: 2 }}>
                {item.toPillElement(value)}
              </Box>
            )}
          />
        </VStack>
      </View>
      <View width="full" height={7} bg="coolGray.800" position={"relative"}>
        <View width={`${healthPercentage}%`} height={10} bg="red.700" />
        <Text
          fontFamily={"Orbitron_400Regular"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          fontSize={20}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          {health} / {maxHealth}
        </Text>
      </View>
    </View>
  );
}
