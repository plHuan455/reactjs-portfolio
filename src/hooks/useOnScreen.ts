import { useEffect, useState } from "react";

const useOnScreen = (element: HTMLElement | null) => {
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false);

  useEffect(() => {
    if(element){
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            setIsOnScreen(true)
          }
          else {
            setIsOnScreen(false);
          }
        })
      })
      observer.observe(element);
      return () => observer.unobserve(element);
    }

  }, [element]);

  return isOnScreen
}

export default useOnScreen