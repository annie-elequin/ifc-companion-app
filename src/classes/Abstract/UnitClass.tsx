import React from "react";
import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
  View,
} from "native-base";
import Checkbox from "expo-checkbox";
import { createFoamClass } from "../../foam-kit/model";
import { useProperty } from "../../foam-kit/hooks";
import { BlockGainClass, PinGainClass, PoisonGainClass, WoundGainClass, DisarmGainClass, BlindGainClass } from "../Gains";

export const UnitClass = createFoamClass({
    name: "UnitClass",
    properties: [
      {
        name: 'id',
        type: 'string',
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
        name: "flex",
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
        value: require("../../assets/combat/gains/health.png"),
      },
      {
        name: 'isSelected',
        type: 'boolean',
        value: false,
      },
      {
        name: 'isActive',
        type: 'boolean',
        value: true,
      },
    ],
    methods: [
      {
        name: "setActive",
        code: function (active) {
          this.isActive = active;

          if (!active) {
            this.decreaseFlex(1);
            this.doPoisonDamage();
            this.decreasePoison(1);
            this.decreasePin(1);
            this.decreaseDisarm(1);
            this.decreaseBlind(1);
          }
        }
      },
      {
        name: 'respawn',
        code: function() {
            this.health = this.maxHealth;
            this.block = 0;
            this.poison = 0;
            this.wound = 0;
            this.flex = 0;
            this.disarm = 0;
            this.pin = 0;
            this.pain = 0;
            this.blind = 0;
            this.isDead = false;
            this.isSelected = false;
        }
      },
      {
        name: 'onTurn',
        code: function() {
            this.block = 0;
            this.flex = 0;
            this.disarm = 0;
            this.pin = 0;
            this.pain = 0;
            this.blind = 0;

            this.isActive = true;
        }
      },
      {
        name: "doDamage",
        code: function (amount, pierce = false) {
          if (this.block > 0 && !pierce) {
            if (this.block < amount) {
              const remaining = amount - this.block;
              this.decreaseHealth(remaining);
            }
  
            this.decreaseBlock(amount)
          } else {
            this.decreaseHealth(amount);
          }
        },
      },
      {
        name: "increaseBlock",
        code: function (amount) {
          if (this.block <= 0) {
            this.block = 0;
          }
  
          this.block += amount;
          console.log("Block increased to " + this.block);
        }
      },
      {
        name: "decreaseBlock",
        code: function (amount) {
          if (this.block > amount) {
            this.block = this.block - amount;
          }
          else {
            this.block = 0;
          }
  
          console.log("Block decreased to " + this.block);
        }
      },
      {
        name: "increaseHealth",
        code: function (amount) {
          if (this.health + amount > this.maxHealth) {
            this.health = this.maxHealth;
          } else {
            this.health = this.health + amount;
          }
        },
      },
      {
        name: "decreaseHealth",
        code: function (amount) {
          if (this.health > amount) {
            this.health = this.health - amount;
          } else {
            this.health = 0;
            this.isDead = true;
          }
        },
      },
      {
        name: "increaseWound",
        code: function (amount) {
          this.wound += amount;
        }
      },
      {
        name: "decreaseWound",
        code: function (amount) {
          if (this.wound > amount) {
            this.wound = this.wound - amount;
          } else {
            this.wound = 0;
          }
        }
      },
      {
        name: "increaseFlex",
        code: function (amount) {
          this.flex += amount;
        }
      },
      {
        name: "decreaseFlex",
        code: function (amount) {
          if (this.flex > amount) {
            this.flex = this.flex - amount;
          } else {
            this.flex = 0;
          }
        }
      },
      {
        name: "increasePoison",
        code: function (amount) {
          this.poison += amount;
        }
      },
      {
        name: "doPoisonDamage",
        code: function () {
          this.doDamage(this.poison, true);
        }
      },
      {
        name: "decreasePoison",
        code: function (amount) {
          if (this.poison > amount) {
            this.poison = this.poison - amount;
          } else {
            this.poison = 0;
          }
        }
      },
      {
        name: "increasePin",
        code: function (amount) {
          this.pin += amount;
        }
      },
      {
        name: "decreasePin",
        code: function (amount) {
          if (this.pin > amount) {
            this.pin = this.pin - amount;
          } else {
            this.pin = 0;
          }
        }
      },
      {
        name: "increaseDisarm",
        code: function (amount) {
          this.disarm += amount;
        }
      },
      {
        name: "decreaseDisarm",
        code: function (amount) {
          if (this.disarm > amount) {
            this.disarm = this.disarm - amount;
          } else {
            this.disarm = 0;
          }
        }
      },
      {
        name: "increasePain",
        code: function (amount) {
          this.pain += amount;
        }
      },
      {
        name: "decreasePain",
        code: function (amount) {
          if (this.pain > amount) {
            this.pain = this.pain - amount;
          } else {
            this.pain = 0;
          }
        }
      },
      {
        name: "increaseBlind",
        code: function (amount) {
          this.blind += amount;
        }
      },
      {
        name: "decreaseBlind",
        code: function (amount) {
          if (this.blind > amount) {
            this.blind = this.blind - amount;
          } else {
            this.blind = 0;
          }
        }
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
    const [image] = useProperty({ value, property: "image" });
    const [health] = useProperty({ value, property: "health" });
    const [maxHealth] = useProperty({ value, property: "maxHealth" });
    const [isSelected] = useProperty({ value, property: "isSelected" });
    const [isActive] = useProperty({ value, property: "isActive" });
    const [id] = useProperty({ value, property: "id" });
  
    // Gains
    const [block] = useProperty({ value, property: "block" });
    const [wound] = useProperty({ value, property: "wound" });
    const [poison] = useProperty({ value, property: "poison" });
    const [pin] = useProperty({ value, property: "pin" });
    const [disarm] = useProperty({ value, property: "disarm" });
    const [blind] = useProperty({ value, property: "blind" });
    

    const UnitGains = [
      { class: new BlockGainClass({amount: block}), increaseCallback: value.increaseBlock, decreaseCallback: value.decreaseBlock },
      { class: new WoundGainClass({amount: wound}), increaseCallback: value.increaseWound, decreaseCallback: value.decreaseWound },
      { class: new PoisonGainClass({amount: poison}), increaseCallback: value.increasePoison, decreaseCallback: value.decreasePoison },
      { class: new PinGainClass({amount: pin}), increaseCallback: value.increasePin, decreaseCallback: value.decreasePin },
      { class: new DisarmGainClass({amount: disarm}), increaseCallback: value.increaseDisarm, decreaseCallback: value.decreaseDisarm },
      { class: new BlindGainClass({amount: blind}), increaseCallback: value.increaseBlind, decreaseCallback: value.decreaseBlind },
    ]
  
    const healthPercentage = (health / maxHealth) * 100;
    const unitOpacity = isActive ? 0 : 0.8;
  
    const onSelectedChange = (val) => {
      value.isSelected = val;
    };
  
    const onActiveChanged = () => {
      value.setActive(!value.isActive);
    }

    return (
      <View flexDirection="column" 
      margin={"2"}
      borderBottomLeftRadius={20}
      borderBottomRightRadius={20}
      overflow={'hidden'}
      >
        <View
          w="500"
          h="100"
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
            <Pressable onPress={onActiveChanged}>
              <Image w="100%" h="100%" source={{ uri: image }} alt="mercenary" />
              <Box position="absolute" top="0" left="0" w="100%" h="100%" bgColor={"#000000"} style={{opacity: unitOpacity}}></Box>
            </Pressable>
          </AspectRatio>
          {id && (
          <Text bold fontSize="2xl" color="#FFFFFF" margin='.5'>{id}</Text>
          )}
          
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
            <HStack flexWrap="wrap" space={2}>
              {UnitGains.map((g, index) => <Box key={index}>{g.class.toPillElement(g.increaseCallback, g.decreaseCallback)}</Box>)}
            </HStack>
          </VStack>
        </View>
        <View width="full" height={7} bg='coolGray.800' position={'relative'}>
          <View width={`${healthPercentage}%`} height={10} bg='red.700' />
          <Text fontFamily={'Orbitron_400Regular'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} fontSize={20} position={'absolute'} top={0} left={0} right={0} bottom={0}>{health} / {maxHealth}</Text>
        </View>
      </View>
    );
}