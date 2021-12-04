import { useRef, useState } from 'react';
import useWebSocket from 'react-native-use-websocket';
import { WebsocketServer } from '../config';

export type ChatSubscriber = (e: WebSocketMessageEvent) => void;
export type ChatWebSocketHook = [boolean, (message: string) => void, (subscriber: ChatSubscriber) => void];

export function useChatWebSocket(): ChatWebSocketHook
{
  const subscribers = useRef<ChatSubscriber[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { sendJsonMessage } = useWebSocket(WebsocketServer, {
    share: true,
    shouldReconnect: () => true,
    onOpen: () => setIsOpen(true),
    onClose: () => setIsOpen(true),
    onMessage: (event: WebSocketMessageEvent) => {
      subscribers.current.map(subscriber => {
        if (!!subscriber) subscriber(event);
      });
    }
  });

  function sendBroadcast(message: string)
  {
    sendJsonMessage({ event: 'broadcast', data: message });
  }

  function subscribe(subscriber: ChatSubscriber)
  {
    return subscribers.current.push(subscriber);
  }

  return [isOpen, sendBroadcast, subscribe];
}