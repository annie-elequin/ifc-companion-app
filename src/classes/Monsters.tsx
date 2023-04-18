import React from 'react';
import { AspectRatio, HStack, Icon, Image, Text, VStack, View } from "native-base";
import { createFoamClass } from "../foam-kit/model";
import { UnitClass } from "./abstract";
import { useProperty } from '../foam-kit/hooks';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BerserkerBadgerClass = createFoamClass({
  name: 'BerserkerBadger',
  inherits: UnitClass,
  properties: [
    {
      name: 'health',
      type: 'number',
      value: 28,
    },
    {
      name: 'image',
      type: 'string',
      value: require('../assets/combat/berserkerbadger.png')
    },
    {
      name: 'maxHealth',
      type: 'number',
      value: 28
    }
  ],
  methods: [
    {
      name: 'toElement',
      code: function () {
        return React.createElement(
          function ({ value }) {
            return (
              <MonsterView value={value} />
            );
          },
          { value: this }
        );
      },
    }
  ]
})

function MonsterView({value}) {
  const [image] = useProperty({value, property: 'image'})
  const [health] = useProperty({value, property: 'health'})
  const [maxHealth] = useProperty({value, property: 'maxHealth'})
  return (
    <View w="600" h="200" bgColor='darkBlue.800' display="flex" flexDirection="row" borderRadius={20} overflow='hidden'>
        <AspectRatio ratio={1}>
            <Image w="100%" h="100%" source={{ uri: image }}></Image>
        </AspectRatio>
        <VStack p="1%" w="40%" h="100%" justifyContent="space-between">
            <Text bold fontSize="5xl" color="#E01212"> - {health}/{maxHealth} +</Text>
            <HStack>
                <HStack alignItems="center">
                    <Icon as={<MaterialCommunityIcons name="shield" />} color="#333BFF" size="5xl"/>
                    <Text bold fontSize="5xl" color="#000000">5</Text>
                </HStack>
                <HStack alignItems="center">
                    <Icon as={<MaterialCommunityIcons name="arm-flex" />} color="#fff64a" size="5xl"/>
                    <Text bold fontSize="5xl" color="#000000">2</Text>
                </HStack>
            </HStack>
        </VStack>
    </View>
  )
}

export {
  BerserkerBadgerClass,
}