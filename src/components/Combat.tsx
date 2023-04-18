import React from "react";
import { FlatList, HStack, Heading, VStack } from "native-base";
import { useProperty } from "../foam-kit/hooks";

export const Combat = ({ value }) => {
  const [gains] = useProperty({value, property: 'gains'})
  const [mercenaries] = useProperty({value, property: 'mercenaries'})
  const [monsters] = useProperty({value, property: 'monsters'})

  return (
    <VStack h="full" alignItems="center">
      <Heading m="10" fontSize="5xl">
        Combat
      </Heading>
      <HStack w="full" justifyContent="center"> {gains.map(g => g.toElement(mercenaries, monsters))} </HStack>
      <FlatList data={mercenaries} numColumns={2} renderItem={({item}) => item.toElement()}/>
      <FlatList data={monsters} numColumns={2} renderItem={({item}) => item.toElement()}/>
    </VStack>
  );
};
