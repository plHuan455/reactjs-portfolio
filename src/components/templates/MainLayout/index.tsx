import * as React from 'react';

export interface MainLayoutProps {
  children: JSX.Element;
}

export default function MainLayout ({children}: MainLayoutProps) {
  return (
    <div className="t-mainLayout">
      {children}
    </div>
  );
}
