import { useContext } from 'react';
import { ThemeContext, ThemeValue } from '../providers';

export function useTheme(): [ThemeValue, ((v: ThemeValue) => void) | undefined]{
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  const {theme, setTheme} = context;
  return [theme, setTheme];
}