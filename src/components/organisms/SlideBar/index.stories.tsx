import { Story, Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import SlideBar from '.';

export default {
  title: 'Components/templates/SlideBar',
  component: SlideBar,
  argTypes: {},
} as Meta;

export const Normal: Story = ({ title, slideBarItems, titleIconName, ...args }) => {
  return (
    <div>
      <BrowserRouter>
        <SlideBar titleIconName={titleIconName} title={title} slideBarItems={slideBarItems} {...args} />
      </BrowserRouter>
    </div>
  );
};

Normal.args = {
  titleIconName: "logoBlueCrayola",
  title: 'Conchon',
  slideBarItems: [
    {title:'Trang chủ', href: '/trang-chu', activeIcon: 'homeBlueCrayola', defaultIcon: 'homeLightSlateGray'},
    {title:'Từ vựng', activeIcon: 'boxBlueCrayola', defaultIcon: 'boxLightSlateGray', items: [{title: 'test', href:'test'}]},
  ]
}