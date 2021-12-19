import { DefaultTheme, Theme } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { ThemeContext, ThemeValue } from "../providers";

export function useTheme(): [ThemeValue, (v: ThemeValue) => void]{
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  const {theme, setTheme} = context;
  return [theme, setTheme ?? ((_: ThemeValue) => {})];
}

export function useThemeSchema(): Theme {
  const [theme] = useTheme();

  function getTheme(bgColor: string) {
    return {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: bgColor
      }
    }
  }

  const [schema, setSchema] = useState<Theme>(getTheme(theme.whiteSmoke));

  useEffect(() => {
    setSchema(getTheme(theme.whiteSmoke));
  }, [theme]);

  return schema;
}