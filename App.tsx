import React from "react";
import * as Sentry from "sentry-expo";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./src/routes";
import { SentryDsn } from "./src/core/config";
import { useThemeSchema } from "./src/core/hooks";
import { Notification } from "./src/core/services";
import { GlobalProvider, ThemeProvider } from "./src/core/providers";

Notification.init();
Sentry.init({
  dsn: SentryDsn,
  enableInExpoDevelopment: false,
  debug: false
});

function Router(){
  const schema = useThemeSchema();

  return (
    <NavigationContainer theme={schema}>
      <StackRoutes />
    </NavigationContainer>
  );
}
  
export default function Main() {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <StatusBar hidden={false} />
        <Router />
      </ThemeProvider>
    </GlobalProvider>
  );
}
