import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export const Notification = {
  
  schedule: async function() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Teste de Título",
        body: 'Teste de Mensagem'
      },
      trigger: { seconds: 2 },
    });
  },

  init: function(){
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
  },
  
  listen: async function() {
    let token = "";

    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus == 'granted')
        token = (await Notifications.getExpoPushTokenAsync()).data;
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C'
      });
    }
  
    return token;
  }
}

