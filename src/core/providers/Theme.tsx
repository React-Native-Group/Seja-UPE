import React, { createContext, FunctionComponent, useState } from "react";
import { Pallete } from "../themes";

export interface ThemeProps {
  children?: React.ReactNode;
}

export interface ThemeValue {
  blue: string;
  red: string;
  black: string;
  gray: string;
  white: string;
  whiteSmoke: string;
}

export interface ThemeProviderValue {
  theme?: Partial<ThemeValue>;
  setTheme?: (v: ThemeValue) => void;
}

export const ThemeContext = createContext<ThemeProviderValue>({});

export const ThemeProvider: FunctionComponent<ThemeProps> = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<Partial<ThemeValue>>(Pallete);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
