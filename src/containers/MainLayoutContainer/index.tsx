import MainLayout from '../../components/templates/MainLayout';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { RiTestTubeFill } from 'react-icons/ri';
import { renderPageUrl } from '../../navigation'; 
import { useMemo, useState } from 'react';
import useMatchMedia from '~hooks/useMatchMedia';
import useDebounce from '~hooks/useDebounce';
import { searchListDummy } from '~assets/dataDummy/groupDummy';
import { SearchItemTypes } from '~molecules/SearchInput';
import { MdOutlineGroup } from 'react-icons/md';
import { BsCalendar3 } from 'react-icons/bs';
import { useAppSelector } from '../../store';

export interface MainLayoutContainerProps {
  children: JSX.Element;
}

export default function MainLayoutContainer({ children }: MainLayoutContainerProps) {
  const { currentGroup, user: currentUser } = useAppSelector((state) => state.system);

  const [headerSearchValue, setHeaderSearchValue] = useState<string>('');
  const {isMobile, isTablet} = useMatchMedia();
  const [isSlideBarCompact, setIsSlideBarCompact] = useState<boolean>(isMobile || isTablet);
  const [isShowSearchList, setIsShowSearchList] = useState<boolean>(false);
  const debounceSearchValue = useDebounce(headerSearchValue, 1000);

  const menuList = useMemo(() => {
    return [
      { 
        label: 'Trang chủ', href: renderPageUrl('HOME'), menuIcon: BiHomeAlt 
      },
      {
        label: 'Quản lý chi tiêu', href: renderPageUrl('BANK_MANAGER_DETAIL'), menuIcon: BsCalendar3
      },
      {
        label: 'Nhóm', menuIcon: MdOutlineGroup, subItems: [
          { label: 'Quản lý nhóm', href: renderPageUrl('GROUP_MANAGER') },
          { label: 'Tạo nhóm', href: renderPageUrl('GROUP_CREATE') }]
      },
      { label: 'Từ vựng', menuIcon: RiTestTubeFill, href: renderPageUrl('VOCABULARIES'), subItems: [
        { label: 'Danh sách từ vựng', href: renderPageUrl('VOCABULARIES')},
        { label: 'Tạo từ vựng', href: renderPageUrl('VOCABULARIES_CREATE')}
      ] },
      {
        label: 'Tài khoản', menuIcon: BiUser, subItems: currentUser ? 
          [ { label: 'Đăng xuất', href: renderPageUrl('SIGN_IN') } ] :
          [
            { label: 'Đăng nhập', href: renderPageUrl('SIGN_IN') },
            { label: 'Đăng ký', href: renderPageUrl('SIGN_UP') }
          ]
      },
    ]
  }, [currentUser])

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
      headerGroupLabel={currentGroup?.name}
      headerSearchList={searchListDummy}
      menuItems={menuList}
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
