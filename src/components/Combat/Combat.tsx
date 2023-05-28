import React from "react";
import { Box, FlatList, HStack, Heading, VStack, View } from "native-base";
import { useProperty } from "../../foam-kit/hooks";
import BottomActionBar from "./BottomActionBar";
import { ScrollView } from "react-native";

export const Combat = ({ value }) => {
  const [gains] = useProperty({ value, property: "gains" });
  const [mercenaries] = useProperty({ value, property: "mercenaries" });
  const [monsters] = useProperty({ value, property: "monsters" });

  return (
    <>
      <HStack h="90%" w="100%" marginTop={24}>
        <ScrollView
          style={{ flexGrow: "0", width: "14%", height: "90%", marginTop: '6%' }}
        >
          <VStack>
            {gains.map((g, index) => (
              <Box key={index}>{g.toIconElement(mercenaries, monsters)}</Box>
            ))}
            <Box h='10%' />
          </VStack>
        </ScrollView>

        <VStack>
          <ScrollView style={{ width: "100%", flex: 'unset', borderBottomWidth: 5, borderBottomColor: 'rgba(255,255,255,.5)' }} horizontal>
            <FlatList
              data={mercenaries}
              numColumns={2}
              renderItem={({ item, index }) => (
                <Box key={index}>{item.toElement()}</Box>
              )}
            />
          </ScrollView>
          <ScrollView style={{ width: "100%" }} horizontal>
            <FlatList
              data={monsters}
              numColumns={2}
              renderItem={({ item, index }) => (
                <Box key={index}>{item.toElement()}</Box>
              )}
            />
            <View height={"10"} />
          </ScrollView>
        </VStack>
      </HStack>
      <BottomActionBar
        gains={gains}
        mercenaries={mercenaries}
        monsters={monsters}
      />
    </>
  );
};
