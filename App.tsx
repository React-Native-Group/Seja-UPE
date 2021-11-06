import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerRoutes } from './src/routes';
import { GlobalProvider, ThemeProvider } from './src/core/providers';

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
