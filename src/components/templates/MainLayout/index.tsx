import * as React from 'react';
import SlideBar, { SlideBarItem } from '../SlideBar';

export interface MainLayoutProps {
  children: JSX.Element;
  slideBarMenuItems: SlideBarItem[];
}

export default function MainLayout ({children, slideBarMenuItems}: MainLayoutProps) {
  return (
    <div className="t-mainLayout">
      <SlideBar titleIconName="logoBlueCrayola" title="Conchon" slideBarItems={slideBarMenuItems}/>
      <main className="t-mainLayout_main">{children}</main>
    </div>
  );
}
