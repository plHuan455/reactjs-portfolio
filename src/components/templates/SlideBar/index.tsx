import * as React from 'react';

export interface SlideBarProps {
  logoSrc?: string;
}

export default function SlideBar ({logoSrc}: SlideBarProps) {
  return (
    <div className="t-slideBar">
        {logoSrc && <div className="t-slideBar_logo">
          <img src={logoSrc} alt="empty" />
        </div>}
        
    </div>
  );
}