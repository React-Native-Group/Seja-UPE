import React from "react";
import * as Sentry from "sentry-expo";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./src/routes";
import { useTheme } from "./src/core/hooks";
import { SentryDsn } from "./src/core/config";
import { Notification } from "./src/core/services";
import { GlobalProvider, ThemeProvider } from "./src/core/providers";

Notification.init();
Sentry.init({
  dsn: SentryDsn,
  enableInExpoDevelopment: false,
  debug: false
});

export default function App() {
  const [ theme ] = useTheme();

  const scheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.whiteSmoke,
    },
  };
  
  return (
    <GlobalProvider>
      <ThemeProvider>
        <StatusBar hidden={false} />
        <NavigationContainer theme={scheme}>
          <StackRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </GlobalProvider>
  );
}
