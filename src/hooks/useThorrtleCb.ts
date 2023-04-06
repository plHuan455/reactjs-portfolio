import { useCallback, useRef } from "react";

const useThrottleCb = (delay: number = 1000) => {
  const throttle = useCallback(() => {
    let showWait: boolean = false;
    let savedCb: () => void;
    return (cb: () => void) => {
      console.log(showWait);
      savedCb = cb;
      if(showWait === true) {
        console.log('return')
        return;
      }

      showWait = true;
      setTimeout(() => {
        savedCb();
        showWait = false;
      }, delay)
    }
  }, [])

  return throttle;
}

export default useThrottleCb