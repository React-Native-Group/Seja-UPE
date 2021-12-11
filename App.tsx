import React, { useEffect } from 'react';
import * as Sentry from 'sentry-expo';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './src/routes';
import { SentryDsn } from './src/core/config';
import { Notification } from './src/core/services';
import { GlobalProvider, ThemeProvider } from './src/core/providers';

// Notification.init();
Sentry.init({
  dsn: SentryDsn,
  enableInExpoDevelopment: false,
  debug: false
});

export default function App() {

  // useEffect(() => {
  //   async function listenNotifications(){
  //     let token = await Notification.listen();
  //     await Notification.schedule();
  //     console.log(token)
  //   }

  //   listenNotifications();
  // }, []);

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
