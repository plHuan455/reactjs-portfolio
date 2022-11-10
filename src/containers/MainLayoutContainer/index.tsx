import MainLayout from '../../components/templates/MainLayout';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { BsBoxSeam } from 'react-icons/bs';
import { RiTestTubeFill } from 'react-icons/ri';
import { renderPageUrl } from '../../navigation'; 
import { useState } from 'react';
import useMatchMedia from '~hooks/useMatchMedia';
import useDebounce from '~hooks/useDebounce';
import { searchListDummy } from '~assets/dataDummy/groupDummy';
import { SearchItemTypes } from '~molecules/SearchInput';
export interface MainLayoutContainerProps {
  children: JSX.Element;
}

export default function MainLayoutContainer({ children }: MainLayoutContainerProps) {
  const [headerSearchValue, setHeaderSearchValue] = useState<string>('');
  const {isMobile, isTablet} = useMatchMedia();
  const [isSlideBarCompact, setIsSlideBarCompact] = useState<boolean>(isMobile || isTablet);
  const [isShowSearchList, setIsShowSearchList] = useState<boolean>(false);
  const debounceSearchValue = useDebounce(headerSearchValue, 1000);

  const handleHeaderSearchItemClick = (value: SearchItemTypes) => {
    setIsShowSearchList(false);
  }

  return (
    <MainLayout
      titleIconName='logoBlueCrayola'
      slideBarTitle='Sales.io'
      isDesktopDown={isMobile || isTablet}
      isSlideBarCompact={isSlideBarCompact}
      headerSearchValue={headerSearchValue}
      isHeaderShowSearchList={isShowSearchList}
      headerSearchList={searchListDummy}
      menuItems={[
        { 
          label: 'Trang chủ', href: renderPageUrl('HOME'), menuIcon: BiHomeAlt 
        },
        {
          label: 'Quản lý chi tiêu', href: renderPageUrl('BANK_MANAGER_DETAIL'), menuIcon: TbBrandGoogleAnalytics
        },
        {
          label: 'Nhóm', menuIcon: BsBoxSeam, subItems: [
            { label: 'Quản lý nhóm', href: renderPageUrl('GROUP_MANAGER') },
            { label: 'Tạo nhóm', href: renderPageUrl('GROUP_CREATE') }]
        },
        { label: 'Test', menuIcon: RiTestTubeFill, href: renderPageUrl('TEST') },
        {
          label: 'Tài khoản', menuIcon: BiUser, subItems: [
            { label: 'Đăng nhập', href: renderPageUrl('SIGN_IN') },
            { label: 'Đăng ký', href: renderPageUrl('SIGN_UP') }]
        },
      ]}
      headerSearchPlaceholder='Tìm và chọn để thay đổi nhóm'
      onHeaderSearchChange={(value) => setHeaderSearchValue(value)}
      onSlideBarCompact={(isCompact) => setIsSlideBarCompact(isCompact)}
      onSlideBarClickOutside={() => {if(isMobile || isTablet) {setIsSlideBarCompact(true)}} }
      onHeaderCloseSearchList={()=> setIsShowSearchList(false)}
      onHeaderOpenSearchList={() => {setIsShowSearchList(true)}}
      onHeaderSearchItemClick={handleHeaderSearchItemClick}
    >
      {children}
    </MainLayout>
  );
}
