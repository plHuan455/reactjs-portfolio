import * as React from 'react';
import SlideBar, { SlideBarItem } from '../../organisms/SlideBar';

export interface MainLayoutProps {
  children: JSX.Element;
  slideBarMenuItems: SlideBarItem[];
}

export default function MainLayout({ children, slideBarMenuItems }: MainLayoutProps) {
  const [isSlideBarCompact, setIsSlideBarCompact] = React.useState<boolean>(false);
  return (
    <div className="t-mainLayout">
      <div className="t-mainLayout_slideBar">
        <SlideBar
          titleIconName="logoBlueCrayola"
          title="Tiêu đề"
          slideBarItems={slideBarMenuItems}
          isCompact={isSlideBarCompact} 
          onHeaderIconClick={()=> setIsSlideBarCompact(preState => !preState)}
          />
      </div>
      <main className="t-mainLayout_main">{children}</main>
    </div>
  );
}
