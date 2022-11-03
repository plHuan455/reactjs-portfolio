import MainLayout from '../../components/templates/MainLayout';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { BsBoxSeam } from 'react-icons/bs';
import { RiTestTubeFill } from 'react-icons/ri';
import { renderPageUrl } from '../../navigation';
export interface MainLayoutContainerProps {
  children: JSX.Element;
}

export default function MainLayoutContainer({ children }: MainLayoutContainerProps) {
  return (
    <MainLayout
      titleIconName='logoBlueCrayola'
      slideBarTitle='Sales.io'
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
    >
      {children}
    </MainLayout>
  );
}
