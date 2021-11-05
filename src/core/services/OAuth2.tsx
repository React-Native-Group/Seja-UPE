import * as Google from 'expo-google-app-auth';
import Constants, { AppOwnership } from 'expo-constants';

import { get } from './Http';
import { ExpoClientId, RealClientId } from '../config';

export async function OAuth2LoginAsync() {
  try {
    let isRunningOnExpo = Constants.appOwnership == AppOwnership.Expo;
    const result = await Google.logInAsync({
      androidClientId: isRunningOnExpo ? ExpoClientId : RealClientId,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      return { 
        cancelled: false, 
        token: result.accessToken, 
        user: result.user,
        error: false 
      };
    }
    return {
      cancelled: true,
      token: null,
      user: null,
      error: false
    };
  } catch (e) {
    return { 
      cancelled: false, 
      token: null, 
      user: null,
      error: true 
    };
  }
}

export async function OAuth2FetchUserAsync(accessToken: string) {
  return await get<any>({
    url:'https://www.googleapis.com/userinfo/v2/me',
    headers: { Authorization: `Bearer ${accessToken}` }
  });
}

