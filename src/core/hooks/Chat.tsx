import { useRef, useState } from 'react';
import useWebSocket from 'react-native-use-websocket';
import { WebsocketServer } from '../config';

export type ChatSubscriber<T> = (e: T) => void;
export type ChatWebSocketHook<T> = [boolean, (message: T) => void, (subscriber: ChatSubscriber<T>) => number, (id: number) => void];

export function useChatWebSocket<T>(): ChatWebSocketHook<T>
{
  const subscribers = useRef<(ChatSubscriber<T> | null)[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { sendJsonMessage } = useWebSocket(WebsocketServer, {
    share: true,
    shouldReconnect: () => true,
    onOpen: () => setIsOpen(true),
    onClose: () => setIsOpen(true),
    onMessage: (event: WebSocketMessageEvent) => {
      subscribers.current.map(subscriber => {
        try{
          if (!!subscriber) subscriber(JSON.parse(event.data));
        } catch(e){}
      });
    }
  });

  function sendBroadcast(message: any)
  {
    sendJsonMessage({ event: 'broadcast', data: message });
  }

  function subscribe(subscriber: ChatSubscriber<T>)
  {
    return subscribers.current.push(subscriber)-1;
  }

  function unsubscribe(id: number){
    if (!!subscribers.current[id])
      subscribers.current[id] = null;
  }

  return [isOpen, sendBroadcast, subscribe, unsubscribe];
}
