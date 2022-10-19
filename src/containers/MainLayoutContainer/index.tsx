import MainLayout from '../../components/templates/MainLayout';
import { BiHomeAlt } from 'react-icons/bi';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { BsBoxSeam } from 'react-icons/bs';
import { RiTestTubeFill } from 'react-icons/ri';
import { renderPageUrl } from '../../navigation';
export interface MainLayoutContainerProps {
  children: JSX.Element;
}

export default function MainLayoutContainer ({children}: MainLayoutContainerProps) {
  return (
    <MainLayout 
      titleIconName='logoBlueCrayola'
      slideBarTitle='Sales.io'
      menuItems={[
        {label: 'Trang chủ', href:'/trang-chu', menuIcon: BiHomeAlt},
        {label: 'Quản lý chi tiêu', menuIcon: TbBrandGoogleAnalytics, subItems: [
          {label: 'Chi tiết', href: renderPageUrl('BANK_MANAGER_DETAIL')},
          {label: 'Thêm chi tiêu', href: renderPageUrl('BANK_MANAGER_ADD')},
        ]},
        {label: 'Word', menuIcon: BsBoxSeam, subItems: [{label: 'test 1', href: renderPageUrl('VOCABULARIES')}]},
        {label: 'Test', menuIcon: RiTestTubeFill, href: renderPageUrl('TEST')},
      ]}
    >
      {children}
    </MainLayout>
  );
}
