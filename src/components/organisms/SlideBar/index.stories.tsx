import { Story, Meta } from '@storybook/react';
import { BiHomeAlt } from 'react-icons/bi';
import { BsBoxSeam } from 'react-icons/bs';
import { RiTestTubeFill } from 'react-icons/ri';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { BrowserRouter } from 'react-router-dom';
import SlideBar from '.';
import { renderPageUrl } from '../../../navigation';

export default {
  title: 'Components/Organisms/SlideBar',
  component: SlideBar,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  return <BrowserRouter>
    <SlideBar
      title='Test title'
      titleIconName='logoBlueCrayola'
      menuItems={[
        { label: 'Trang chủ', href: '/trang-chu', menuIcon: BiHomeAlt },
        {
          label: 'Quản lý chi tiêu', menuIcon: TbBrandGoogleAnalytics, subItems: [
            { label: 'Chi tiết', href: renderPageUrl('BANK_MANAGER_DETAIL') },
            { label: 'Thêm chi tiêu', href: renderPageUrl('BANK_MANAGER_ADD') },
          ]
        },
        { label: 'Word', menuIcon: BsBoxSeam, subItems: [{ label: 'test 1', href: renderPageUrl('VOCABULARIES') }] },
        { label: 'Test', menuIcon: RiTestTubeFill, href: renderPageUrl('TEST') },
      ]}
    />
  </BrowserRouter>
}