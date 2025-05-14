import { useEffect, useLayoutEffect, useRef } from 'react';

export const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useLayoutEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
};