import { OAuth2LoginAsync, OAuth2Payload } from "../services";

export type GoogleAuthHook = [() => void];
export type GoogleAuthProps = { onResponse: (payload: OAuth2Payload | undefined, isAuthenticated: boolean) => void };

export function useGoogleAuth({ onResponse }: GoogleAuthProps): GoogleAuthHook {

  async function trigger(){
    let [success, payload] = await OAuth2LoginAsync();
    onResponse(payload, success);
  }

  return [() => trigger()];
}