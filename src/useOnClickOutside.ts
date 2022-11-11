import { useEffect } from 'react';

const useOnClickOutside = (ref: React.RefObject<any>, handler: (event: TouchEvent | MouseEvent) => void) => {
  useEffect(
    () => {
      const listener = (event: TouchEvent | MouseEvent) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}

export default useOnClickOutside;