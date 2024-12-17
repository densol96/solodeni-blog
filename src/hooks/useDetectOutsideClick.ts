import { useEffect, useRef } from "react";

export function useDetectOutsideClick(action: VoidFunction) {
  const domElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!domElementRef.current?.contains(e.target as HTMLElement)) {
        action();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [domElementRef.current, action]);

  return domElementRef;
}
