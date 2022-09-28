import * as React from 'react';
import SlideBar from '../../components/templates/SlideBar';
import logoSrc from "../../assets/logos/mainLogo.svg";

export interface TestPageProps {
}

export default function TestPage (props: TestPageProps) {
  return (
    <div>
      <SlideBar title="Conchon" logoSrc={logoSrc} slideBarItems={[
        {title:'Trang chủ', href: '/trang-chu', activeIcon: 'homeBlueCrayola', defaultIcon: 'homeLightSlateGray'},
        {title:'Từ vựng', activeIcon: 'boxBlueCrayola', defaultIcon: 'boxLightSlateGray', items: [{title: 'test', href:'test'}]},
      ]}/>
    </div>
  );
}
