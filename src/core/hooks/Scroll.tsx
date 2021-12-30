import { useRef, MutableRefObject } from "react";
import { ScrollView } from "react-native";

export type PageScrollHook = { 
  scrollRef: MutableRefObject<ScrollView | null>; 
  setScroll: (s: ScrollView | null) => void; 
  scrollToTop: () => void; 
};

export function usePageScroll(): PageScrollHook {
  const scrollRef = useRef<ScrollView | null>(null);

  function setScroll(ref: ScrollView | null){
    scrollRef.current = ref;
  }

  function scrollToTop(){
    scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  }

  return { scrollRef, setScroll, scrollToTop };
}