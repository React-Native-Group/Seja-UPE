import React, { createContext, FunctionComponent, useState } from "react";

export interface ThemeProps {
  children?: React.ReactNode
}

export interface ThemeValue {
  primary: string,
  secondary: string,
  success: string,
  danger: string,
  warning: string,
  info: string,
  light: string,
  dark: string,
  muted: string,
  white: string
}

export interface ThemeProviderValue {
  theme?: Partial<ThemeValue>,
  setTheme?: (v: ThemeValue) => void
}

export const ThemeContext = createContext<ThemeProviderValue>({});

export const ThemeProvider: FunctionComponent<ThemeProps> = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<Partial<ThemeValue>>({});

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
