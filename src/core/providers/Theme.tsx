import React, { createContext, FunctionComponent, useState } from "react";
import { LightPallete } from "../themes";

export interface ThemeProps {
  children?: React.ReactNode;
}

export interface ThemeValue {
  schemaName: string;
  blue: string;
  blueNeon: string;
  red: string;
  black: string;
  yellow: string;
  gray: string;
  white: string;
  whiteSmoke: string;
  evaluationColor: string;
  textColor: string;
  concurrencyGreen: string;
  concurrencyRed: string;
  chartDatasetColor: string;
  chartGradientFrom: string;
  chartGradientTo: string;
  chartColor: string;
  chartLabelColor: string;
  chartDotColor: string;
  chatOwnTextColor: string;
  chatOwnBackgroundColor: string;
  chatTextColor: string;
  chatTextBackgroundColor: string;
  chatBackgroundColor: string;
}

export interface ThemeProviderValue {
  theme: ThemeValue;
  setTheme?: (v: ThemeValue) => void;
}

export const ThemeContext = createContext<ThemeProviderValue>({ theme: LightPallete });

export const ThemeProvider: FunctionComponent<ThemeProps> = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<ThemeValue>(LightPallete);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
