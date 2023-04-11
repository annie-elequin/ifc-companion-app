import React from "react";

export interface ITheme {
  [key: string]: (...args: any[]) => JSX.Element;
}

export const ThemeContext = React.createContext<ITheme>({});
