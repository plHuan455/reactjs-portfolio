import { useEffect, useState } from "react";

const useDebounce = (value: any, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<any>(value);
  useEffect(() => {
    const timeoutFuc = setTimeout(()=> {
      setDebounceValue(value)
    }, delay);
    return () => {
      clearTimeout(timeoutFuc);
    }
  }, [value, delay])

  return debounceValue;
}

export default useDebounce;