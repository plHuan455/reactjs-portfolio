import * as React from 'react';
import MainLayout from '../../components/templates/MainLayout';

export interface MainLayoutContainerProps {
  children: JSX.Element;
}

export default function MainLayoutContainer ({children}: MainLayoutContainerProps) {
  return (
    <MainLayout slideBarMenuItems={[
      {title:'Trang chủ', href: '/trang-chu', activeIcon: 'homeBlueCrayola', defaultIcon: 'homeLightSlateGray'},
      {title:'Từ vựng', activeIcon: 'boxBlueCrayola', defaultIcon: 'boxLightSlateGray', items: [
        {title: 'test', href:'/test'},
        {title: 'test1', href:'/test1'},
        {title: 'test2', href:'/test2'},
      ]},
    ]}>
      {children}
    </MainLayout>
  );
}
