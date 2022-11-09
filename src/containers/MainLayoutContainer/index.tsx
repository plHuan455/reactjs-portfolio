import MainLayout from '../../components/templates/MainLayout';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { BsBoxSeam } from 'react-icons/bs';
import { RiTestTubeFill } from 'react-icons/ri';
import { renderPageUrl } from '../../navigation'; 
import { useState } from 'react';
import useMatchMedia from '~hooks/useMatchMedia';
import useDebounce from '~hooks/useDebounce';
export interface MainLayoutContainerProps {
  children: JSX.Element;
}

export default function MainLayoutContainer({ children }: MainLayoutContainerProps) {
  const [headerSearchValue, setHeaderSearchValue] = useState<string>('');
  const {isMobile, isTablet} = useMatchMedia();
  const [isSlideBarCompact, setIsSlideBarCompact] = useState<boolean>(isMobile || isTablet);
  const [isShowSearchList, setIsShowSearchList] = useState<boolean>(false);
  const debounceSearchValue = useDebounce(headerSearchValue, 1000);
  return (
    <MainLayout
      titleIconName='logoBlueCrayola'
      slideBarTitle='Sales.io'
      isDesktopDown={isMobile || isTablet}
      isSlideBarCompact={isSlideBarCompact}
      onSlideBarCompact={() => setIsSlideBarCompact(preState => !preState)}
      headerSearchValue={headerSearchValue}
      isHeaderShowSearchList={isShowSearchList}
      onHeaderCloseSearchList={()=> setIsShowSearchList(false)}
      onHeaderOpenSearchList={() => {setIsShowSearchList(true)}}
      headerSearchList={[
        {
          title: 'test 1',
          description: 'description 1',
          avatarSrc: 'https://picsum.photos/300/200'
        },
        {
          title: 'test 2',
          description: 'description 2',
          avatarSrc: 'https://picsum.photos/300/201'
        },
      ]}
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
    >
      {children}
    </MainLayout>
  );
}
