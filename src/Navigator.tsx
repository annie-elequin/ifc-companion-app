import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import StartScreen from "./screens/StartScreen/StartScreen";
import DemoView from "./screens/DemoView";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={StartScreen} />
        <Stack.Screen name="DemoView" component={DemoView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
