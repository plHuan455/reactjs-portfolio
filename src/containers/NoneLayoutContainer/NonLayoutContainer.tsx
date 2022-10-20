import { Suspense } from "react";

interface NonLayoutContainer {
  children: React.ReactNode;
}

const NonLayoutContainer: React.FC<NonLayoutContainer> = ({children}) => {
  return <Suspense fallback='loading...'>
      {children}
    </Suspense>
}

export default NonLayoutContainer;