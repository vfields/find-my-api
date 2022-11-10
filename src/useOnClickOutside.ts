import { useEffect } from 'react';

/* const refContainer = useRef(initialValue); 

useRef returns a mutable ref object whose .current property is 
initialized to the passed argument (initialValue). The returned object will 
persist for the full lifetime of the component.

Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

*/

const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(
    () => {
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or its children
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
        // I think right here I might need to reset other state
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      // when the component unmounts, clean up 
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // only listen to ref and handler for this effect
    [ref, handler]
  );
}

export default useOnClickOutside;