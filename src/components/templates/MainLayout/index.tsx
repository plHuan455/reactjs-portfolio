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
  headerSearchValue: string;
  headerSearchPlaceholder?: string;
  headerGroupLabel?: string;
  headerSearchList?: SearchItemTypes[];
  isSearchLoading?: boolean;
  isHeaderShowSearchList?: boolean;
  onSlideBarCompact?: (isCompact: boolean) => void;
  onSlideBarClickOutside?: () => void;
  onHeaderCloseSearchList?: () => void;
  onHeaderOpenSearchList?: () => void;
  onHeaderSearchChange?: (value: string) => void;
  onHeaderSearchItemClick?: (value: SearchItemTypes) => void;
}

export default function MainLayout({
  headerSearchValue, 
  headerSearchPlaceholder,
  isDesktopDown,
  headerSearchList = [],
  headerGroupLabel = "",
  isSearchLoading,
  isSlideBarCompact,
  titleIconName, 
  slideBarTitle, 
  isHeaderShowSearchList,
  children, 
  menuItems, 
  onSlideBarCompact,
  onSlideBarClickOutside,
  onHeaderCloseSearchList,
  onHeaderOpenSearchList,
  onHeaderSearchChange,
  onHeaderSearchItemClick,
}: MainLayoutProps) {
  return (
    <div className="t-mainLayout">
      <div className="t-mainLayout_slideBar">
        <SlideBar
          title={slideBarTitle}
          titleIconName={titleIconName}
          menuItems={menuItems}
          isCompact={isSlideBarCompact}
          onClickOutside={onSlideBarClickOutside}
          onCompact={onSlideBarCompact}
        />
      </div>
      <div className="t-mainLayout_content">
        <div className={mapModifiers('t-mainLayout_content_header', !isSlideBarCompact && !isDesktopDown && 'fullSlideBar')}>
          <Header
            groupLabel={headerGroupLabel}
            searchValue={headerSearchValue} 
            searchPlaceholder={headerSearchPlaceholder}
            isShowSearchList={isHeaderShowSearchList}
            onCloseSearchList={onHeaderCloseSearchList}
            searchList={headerSearchList}
            isSearchLoading={isSearchLoading}
            onSearchChange={onHeaderSearchChange}
            onOpenSearchList={onHeaderOpenSearchList}
            onSearchItemClick={onHeaderSearchItemClick}
          />
        </div>
        <main className="t-mainLayout_content_main">
          <Suspense fallback={<Loading size='page' />}>
            {children}
          </Suspense>
        </main>
      </div>
      
    </div>
  );
}
