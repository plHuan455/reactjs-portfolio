import * as React from 'react';
import MainLayout from '../../components/templates/MainLayout';

export interface MainLayoutContainerProps {
  children: JSX.Element;
}

export default function MainLayoutContainer ({children}: MainLayoutContainerProps) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
}
