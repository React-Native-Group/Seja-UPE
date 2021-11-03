import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { GlobalProvider, ThemeProvider } from './src/core/providers';
import { StatusBar } from 'expo-status-bar';
import { DrawerRoutes } from './src/routes';

export default function App() {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar hidden={false} style="dark" />
          <DrawerRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </GlobalProvider>
  );
}
