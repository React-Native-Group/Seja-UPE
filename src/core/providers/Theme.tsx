import React, { createContext, FunctionComponent, useState } from "react";
import { Pallete } from "../themes";

export interface ThemeProps {
  children?: React.ReactNode;
}

export interface ThemeValue {
  blue: string;
  blueNeon: string;
  red: string;
  black: string;
  yellow: string;
  gray: string;
  white: string;
  whiteSmoke: string;
  evaluationColor: string;
  concurrencyGreen: string;
  concurrencyRed: string;
  chartDatasetColor: string;
  chartGradientFrom: string;
  chartGradientTo: string;
  chartColor: string;
  chartLabelColor: string;
  chartDotColor: string;
  chatOwnTextColor: string,
  chatOwnBackgroundColor: string,
  chatTextColor: string,
  chatBackgroundColor: string;
}

export interface ThemeProviderValue {
  theme: ThemeValue;
  setTheme?: (v: ThemeValue) => void;
}

export const ThemeContext = createContext<ThemeProviderValue>({ theme: Pallete });

export const ThemeProvider: FunctionComponent<ThemeProps> = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<ThemeValue>(Pallete);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
