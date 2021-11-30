import { GoogleUser, logInAsync } from 'expo-google-app-auth';
import Constants, { AppOwnership } from 'expo-constants';

import { ExpoClientId, RealClientId } from '../config';

export type OAuth2Payload = {
  accessToken: string | null;
  idToken: string | null;
  refreshToken: string | null;
  user: GoogleUser;
};

export type OAuth2Result = [boolean, OAuth2Payload | undefined];

export async function OAuth2LoginAsync(): Promise<OAuth2Result> {
  try {
    let isRunningOnExpo = Constants.appOwnership == AppOwnership.Expo;
    const result = await logInAsync({
      androidClientId: isRunningOnExpo ? ExpoClientId : RealClientId,
      androidStandaloneAppClientId: isRunningOnExpo ? ExpoClientId : RealClientId,
      scopes: ['profile', 'email']
    });
    return (result.type === 'success') ? [true, result] : [false, undefined];
  } catch (e: any) {
    return [false, undefined];
  }
}

