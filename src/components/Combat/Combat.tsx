import React from "react";
import { Box, FlatList, HStack, Heading, VStack } from "native-base";
import { useProperty } from "../../foam-kit/hooks";
import BottomActionBar from "./BottomActionBar";

export const Combat = ({ value }) => {
  const [gains] = useProperty({ value, property: "gains" });
  const [mercenaries] = useProperty({ value, property: "mercenaries" });
  const [monsters] = useProperty({ value, property: "monsters" });

  return (
    <>
     <HStack h='full' w='full'>
      <VStack alignSelf={'center'}>
        {gains.map((g, index) => <Box key={index}>{g.toElement(mercenaries, monsters)}</Box>)}
      </VStack>
      <VStack alignItems={'center'}>
        <FlatList
          data={mercenaries}
          numColumns={2}
          renderItem={({ item, index }) => <Box key={index}>{item.toElement()}</Box>}
        />
        <FlatList
          data={monsters}
          numColumns={2}
          renderItem={({ item, index }) => <Box key={index}>{item.toElement()}</Box>}
        />
      </VStack> 
    </HStack>
      <BottomActionBar gains={gains} mercenaries={mercenaries} monsters={monsters} />
    </>
   
  );
};
