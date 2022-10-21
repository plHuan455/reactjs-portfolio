import SlideBar, { MenuType } from '../../organisms/SlideBar';
import { Suspense } from 'react';
import { IconNames } from '../../atoms/Icon';
import Loading from '~atoms/Loading';

export interface MainLayoutProps {
  children: JSX.Element;
  slideBarTitle?: string;
  menuItems: MenuType[];
  titleIconName: IconNames;
}

export default function MainLayout({titleIconName, slideBarTitle, children, menuItems }: MainLayoutProps) {
  return (
    <div className="t-mainLayout">
      <div className="t-mainLayout_slideBar">
        <SlideBar
          title={slideBarTitle}
          titleIconName={titleIconName}
          menuItems={menuItems}
        />
      </div>
      <main className="t-mainLayout_main">
        <Suspense fallback={<Loading size='full' />}>
          {children}
        </Suspense>
      </main>
    </div>
  );
}
