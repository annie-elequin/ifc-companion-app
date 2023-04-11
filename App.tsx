import React from "react";
import { NativeBaseProvider } from "native-base";
import { theme } from "./src/screens/theme";
import Navigator from "./src/Navigator";
import { ThemeContext } from "./src/foam-kit/theme";
import { BaseTheme } from "./src/foam-kit/BaseTheme";
import { AppProvider } from "./src/context/AppContext";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <ThemeContext.Provider value={BaseTheme}>
        <AppProvider>
          <Navigator />
        </AppProvider>
      </ThemeContext.Provider>
    </NativeBaseProvider>
  );
}
