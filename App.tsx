import React from 'react';
import * as Sentry from 'sentry-expo';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './src/routes';
import { SentryDsn } from './src/core/config';
import { GlobalProvider, ThemeProvider } from './src/core/providers';

Sentry.init({
  dsn: SentryDsn,
  enableInExpoDevelopment: false,
  debug: false
});

export default function App() {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <StatusBar hidden={false} />
        <NavigationContainer>
          <StackRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </GlobalProvider>
  );
}
