import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Sentry from 'sentry-expo';

import { DrawerRoutes } from './src/routes';
import { GlobalProvider, ThemeProvider } from './src/core/providers';

Sentry.init({
  dsn: 'https://89fdc0e111744aac87631c0b2adba9fe@o1062890.ingest.sentry.io/6053318',
  enableInExpoDevelopment: false,
  debug: false
});

export default function App() {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <StatusBar hidden={false} />
        <NavigationContainer>
          <DrawerRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </GlobalProvider>
  );
}
