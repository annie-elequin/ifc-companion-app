import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { theme } from "./src/screens/theme";

import StartScreen from "./src/screens/StartScreen/StartScreen";
import DemoOneScene from "./src/screens/DemoOne/DemoOne";
import DemoTwoScene from "./src/screens/DemoTwo/DemoTwo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={StartScreen} />
          <Stack.Screen name="DemoOneScene" component={DemoOneScene} />
          <Stack.Screen name="DemoTwoScene" component={DemoTwoScene} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
