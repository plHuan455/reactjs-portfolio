import SlideBar, { MenuType } from '../../organisms/SlideBar';
import { Suspense } from 'react';
import { IconNames } from '../../atoms/Icon';
import Loading from '~atoms/Loading';
import Header from '~templates/Header';
import { SearchItemTypes } from '~molecules/SearchInput';
import { mapModifiers } from '../../../utils/funcs';

export interface MainLayoutProps {
  children: JSX.Element;
  slideBarTitle?: string;
  isDesktopDown?: boolean;
  menuItems: MenuType[];
  titleIconName: IconNames;
  isSlideBarCompact: boolean;
  onSlideBarCompact?: () => void;
  headerSearchValue: string;
  headerSearchPlaceholder?: string;
  headerSearchList?: SearchItemTypes[];
  isHeaderShowSearchList?: boolean;
  onHeaderCloseSearchList?: () => void;
  onHeaderOpenSearchList?: () => void;
  onHeaderSearchChange?: (value: string) => void;
}

export default function MainLayout({
  headerSearchValue, 
  headerSearchPlaceholder,
  isDesktopDown,
  headerSearchList = [],
  isSlideBarCompact,
  titleIconName, 
  slideBarTitle, 
  isHeaderShowSearchList,
  children, 
  menuItems, 
  onSlideBarCompact,
  onHeaderCloseSearchList,
  onHeaderOpenSearchList,
  onHeaderSearchChange 
}: MainLayoutProps) {
  return (
    <div className="t-mainLayout">
      <div className="t-mainLayout_slideBar">
        <SlideBar
          title={slideBarTitle}
          titleIconName={titleIconName}
          menuItems={menuItems}
          isCompact={isSlideBarCompact}
          onCompact={onSlideBarCompact}
        />
      </div>
      <div className="t-mainLayout_content">
        <div className={mapModifiers('t-mainLayout_content_header', !isSlideBarCompact && !isDesktopDown && 'fullSlideBar')}>
          <Header 
            searchValue={headerSearchValue} 
            searchPlaceholder={headerSearchPlaceholder}
            isShowSearchList={isHeaderShowSearchList}
            onCloseSearchList={onHeaderCloseSearchList}
            searchList={headerSearchList}
            onSearchChange={onHeaderSearchChange}
            onOpenSearchList={onHeaderOpenSearchList}
          />
        </div>
        <main className="t-mainLayout_content_main">
          <Suspense fallback={<Loading size='full' />}>
            {children}
          </Suspense>
        </main>
      </div>
      
    </div>
  );
}
