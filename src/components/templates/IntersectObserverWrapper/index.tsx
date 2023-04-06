import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import useOnScreen from '~hooks/useOnScreen';

export interface IntersectObserverWrapperProps {
  children: React.ReactNode;
  onInView: () => void;
  onOutView?: (position: 'bottom' | 'top') => void;
  isShowDebug?: boolean;
}

const IntersectObserverWrapper: React.FC<IntersectObserverWrapperProps> = ({isShowDebug, children, onInView, onOutView}) => {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            onInView();
            if(isShowDebug){
              console.log('isIntersecting')
            }
          }
          else {
            console.log(entries);
          }
        })
      })
      topRef.current && observer.observe(topRef.current);
      bottomRef.current && observer.observe(bottomRef.current);
      return () => {
        if(topRef.current !== null)
          observer.unobserve(topRef.current);
        if(bottomRef.current !== null)
          observer.unobserve(bottomRef.current);
      };
  }, [topRef.current])
  
  return (
    <Box className="t-intersectObserverWrapper" sx={{position: 'relative', zIndex: 200}} ref={topRef}>
      <Box sx={{position: 'absolute', top: '50vh', backgroundColor: isShowDebug ? 'orange' : undefined, width: isShowDebug ? '20px' : undefined, height: isShowDebug ? '20px' : undefined}}></Box>
      {children}
      <Box sx={{position: 'absolute', bottom: '50vh', backgroundColor: isShowDebug ? 'yellow' : undefined, width:isShowDebug ? '20px' : undefined, height: isShowDebug ? '20px' : undefined}} ref={bottomRef}></Box>
    </Box>
  )
};

IntersectObserverWrapper.defaultProps = {
  children: undefined,
};

export default IntersectObserverWrapper;

