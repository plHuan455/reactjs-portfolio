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
import { useAppDispatch, useAppSelector } from '../../store';
import { useQuery } from '@tanstack/react-query';
import { getGroupsService } from '~services/group';
import { setCurrentGroup } from '../../store/system';
import { toast } from 'react-toastify';

export interface MainLayoutContainerProps {
  children: JSX.Element;
}

export default function MainLayoutContainer({ children }: MainLayoutContainerProps) {
  const dispatch = useAppDispatch();

  const { currentGroup, user: currentUser } = useAppSelector((state) => state.system);

  const [headerSearchValue, setHeaderSearchValue] = useState<string>('');
  const {isMobile, isTablet} = useMatchMedia();
  const [isSlideBarCompact, setIsSlideBarCompact] = useState<boolean>(isMobile || isTablet);
  const [isShowSearchList, setIsShowSearchList] = useState<boolean>(false);
  const debounceSearchValue = useDebounce(headerSearchValue, 500);

  const { data: groupData, isLoading: isGroupGetting } = useQuery({
    queryKey: ['main-layout-get-groups', debounceSearchValue],
    queryFn: () => getGroupsService(debounceSearchValue),
  })

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
  }, [currentUser]);

  const convertedSearchData = useMemo<SearchItemTypes[]>(()=> {
    return groupData?.map(value => ({
      title: value.name ?? '',
      avatarSrc: value.avatarImg,
      description: value.description,
      id: value._id
    })) ?? []
  }, [groupData])

  const handleHeaderSearchItemClick = (value: SearchItemTypes) => {
    const foundGroup = groupData?.find(group => group._id === value.id);
    if(!foundGroup) {
      toast.error('Không tìm thấy nhóm');
      return;
    }
    
    setIsShowSearchList(false);
    dispatch(setCurrentGroup({
      id: foundGroup._id ?? '',
      description: foundGroup.description ?? '',
      name: foundGroup.name ?? '',
      slug: foundGroup.slug ?? ''
    }))
  }

  return (
    <MainLayout
      titleIconName='logoBlueCrayola'
      slideBarTitle='Sales.io'
      isDesktopDown={isMobile || isTablet}
      isSlideBarCompact={isSlideBarCompact}
      headerSearchValue={headerSearchValue}
      isSearchLoading={isGroupGetting}
      isHeaderShowSearchList={isShowSearchList}
      headerGroupLabel={currentGroup?.name}
      headerSearchList={convertedSearchData}
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
