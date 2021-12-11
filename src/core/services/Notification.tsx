import Constants, { AppOwnership } from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { ExpoPushToken } from 'expo-notifications';
import { Platform } from 'react-native';

export const Notification = {
  
  schedule: async function() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Teste de Título",
        body: 'Teste de Mensagem'
      },
      trigger: { seconds: 2 }
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
    let token: string | null = null;

    if (Constants.isDevice) {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;
      if (finalStatus !== 'granted') {
        try{
          finalStatus = (await Notifications.requestPermissionsAsync()).status;
        } catch (e: any){
          console.warn(e.message);
        }
      }
      if (finalStatus == 'granted'){
        try{
          let isRunningOnExpo = Constants.appOwnership == AppOwnership.Expo;
          if (isRunningOnExpo) {
            token = (await Notifications.getExpoPushTokenAsync()).data;
          } 
          else {
            let devicePushToken = await Notifications.getDevicePushTokenAsync();
            if (devicePushToken.type == 'android'){
              token = devicePushToken.data;
            }
          }
        } catch (e: any){
          console.warn(e.message);
        }
      }
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

