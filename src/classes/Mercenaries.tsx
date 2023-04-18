import React from 'react';
import { AspectRatio, Checkbox, HStack, Icon, Image, Text, VStack, View } from "native-base";
import { createFoamClass } from "../foam-kit/model";
import { UnitClass } from "./abstract";
import { useProperty } from '../foam-kit/hooks';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FoulbornClass = createFoamClass({
  name: 'Foulborn',
  inherits: UnitClass,
  properties: [
    {
      name: 'health',
      type: 'number',
      value: 12,
    },
    {
      name: 'image',
      type: 'image',
      value: require('../assets/combat/foulborn.png')
    },
    {
      name: 'maxHealth',
      type: 'number',
      value: 12
    }
  ],
  methods: [
    {
      name: 'toElement',
      code: function () {
        return React.createElement(
          function ({ value }) {
            return (
              <MercenaryView value={value} />
            );
          },
          { value: this }
        );
      },
    }
  ]
})

const DreyaClass = createFoamClass({
  name: 'Dreya',
  inherits: UnitClass,
  properties: [
    {
      name: 'health',
      type: 'number',
      value: 10,
    },
    {
      name: 'image',
      type: 'image',
      value: require('../assets/combat/dreya.png')
    },
    {
      name: 'maxHealth',
      type: 'number',
      value: 10
    }
  ],
  methods: [
    {
      name: 'toElement',
      code: function () {
        return React.createElement(
          function ({ value }) {
            return (
              <MercenaryView value={value} />
            );
          },
          { value: this }
        );
      },
    }
  ]
})

const CassiusClass = createFoamClass({
  name: 'Cassius',
  inherits: UnitClass,
  properties: [
    {
      name: 'health',
      type: 'number',
      value: 9,
    },
    {
      name: 'image',
      type: 'string',
      value: require('../assets/combat/cassius.png')
    },
    {
      name: 'maxHealth',
      type: 'number',
      value: 9
    }
  ],
  methods: [
    {
      name: 'toElement',
      code: function () {
        return React.createElement(
          function ({ value }) {
            return (
              <MercenaryView value={value} />
            );
          },
          { value: this }
        );
      },
    }
  ]
})

const ScourgeClass = createFoamClass({
  name: 'Scourge',
  inherits: UnitClass,
  properties: [
    {
      name: 'health',
      type: 'number',
      value: 14,
    },
    {
      name: 'image',
      type: 'string',
      value: require('../assets/combat/scourge.png')
    },
    {
      name: 'maxHealth',
      type: 'number',
      value: 14
    }
  ],
  methods: [
    {
      name: 'toElement',
      code: function () {
        return React.createElement(
          function ({ value }) {
            return (
              <MercenaryView value={value} />
            );
          },
          { value: this }
        );
      },
    }
  ]
})

function MercenaryView({value}) {
  const [image] = useProperty({value, property: 'image'})
  const [health] = useProperty({value, property: 'health'})
  const [maxHealth] = useProperty({value, property: 'maxHealth'})
  const [isSelected] = useProperty({value, property: 'isSelected'})

  const onSelectedChange = val => {
    value.isSelected = val
  }
   return (
    <View w="600" h="200" bgColor='darkBlue.800' display="flex" flexDirection="row" borderRadius={20} overflow='hidden'>
        <AspectRatio ratio={1}>
              <Image w="100%" h="100%" source={{ uri: image }} />
        </AspectRatio>
        <VStack p="1%" w="40%" h="100%" justifyContent="space-between">
            <Text bold fontSize="5xl" color="#E01212"> - {health}/{maxHealth} +</Text>
            <Checkbox value={isSelected} accessibilityLabel="isSelected" width='15%' height='15%' onChange={onSelectedChange}>
              is Selected
              </Checkbox>
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
  )
}

export {
  FoulbornClass,
  DreyaClass,
  ScourgeClass,
  CassiusClass
}