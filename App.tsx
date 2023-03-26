import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreen from "./src/screens/StartScreen";
import DemoOneScene from "./src/screens/DemoOne/scene";
import DemoTwoScene from "./src/screens/DemoTwo/Scene";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={StartScreen} />
        <Stack.Screen name="DemoOneScene" component={DemoOneScene} />
        <Stack.Screen name="DemoTwoScene" component={DemoTwoScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
