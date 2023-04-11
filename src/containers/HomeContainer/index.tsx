
import { Box } from '@mui/material';
import Banner from '~templates/Banner';
import Section from '~templates/Section';
import Skill from '~templates/Skill';
import ProjectContainer from './ProjectContainer';
import AboutMeContainer from './AboutMeContainer';
import MenuControl, { MenuItemTypes } from '~organisms/MenuControl';
import { useEffect, useMemo, useRef, useState } from 'react';
import _ from 'lodash';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import { rem } from '~mixin';

export interface HomeContainerProps {
}

export type HomeIdsTypes = {
  [key: number]: string;
}
export const homeIds: HomeIdsTypes = {
  1: 'home',
  2: 'skills',
  3: 'projects',
  4: 'about',
}

export default function HomeContainer(props: HomeContainerProps) {
  const sectionRefList = useRef<(HTMLElement | null) []>([]);
  const [activeMenuId, setActiveMenuId] = useState<number>(1);
  const [isShowFullIndicator, setIsShowFullIndicator] = useState<boolean>(true);
  const menuList = useMemo<MenuItemTypes[]>(() => {
    return [
      {
        id: 1,
        icon: <HomeOutlinedIcon />,
        color: '#2881c5',
      },
      {
        id: 2,
        icon: <ScienceOutlinedIcon />,
        color: '#B449EB',
      },
      {
        id: 3, // projects
        icon: <DynamicFeedOutlinedIcon />,
        color: '#F64238',
      },
      {
        id: 4,
        icon: <ContactPhoneOutlinedIcon />,
        color: '#11C611',
      },
    ]
  }, []);

  const handleScroll = () => {
    const windowScrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const checkPointLocation = windowScrollY + windowHeight / 2;
    for(let i = 0 ; i < sectionRefList.current.length ; i=i+1){
      const chooseElement = sectionRefList.current[i];
      if(chooseElement) {
        const sectionHeight = chooseElement.offsetHeight;
        const sectionTop = chooseElement.offsetTop;
        
        if(checkPointLocation >= sectionTop && checkPointLocation <= sectionHeight + sectionTop) {
          setActiveMenuId(i+1);
          break;
        }
      }
    }
  };

  useEffect(() => {  
    const throttledHandleScroll = _.throttle(handleScroll, 1000/30);
  
    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [])

  const handleMenuItemClick = (menuId: number) => {
    document.getElementById(homeIds[menuId])?.scrollIntoView();
  }

  return (
    <>
      <Section modifiers={['noPt']} id="home" ref={(ref) => sectionRefList.current[0] = ref}>
        <Banner isOnScreen={activeMenuId === 1}/>
      </Section>
      <Section id="skills" ref={(ref) => sectionRefList.current[1] = ref}>
        <Skill />
      </Section>
      <Section id="projects" ref={(ref) => sectionRefList.current[2] = ref}>
        <ProjectContainer onShowMoreClick={() => {
          setTimeout(() => {
            handleScroll()
          }, 250)
        }}/>
      </Section>
      <Section id="about" ref={(ref) => sectionRefList.current[3] = ref}>
        <AboutMeContainer />
      </Section>
      <Box sx={{ position: 'fixed', bottom: '50vh', transform: 'translateY(40%)', right: rem(20), zIndex: 200 }}>
        <MenuControl onToggleBtnClick={() => setIsShowFullIndicator(preState => !preState)} menuList={menuList} activeMenuId={activeMenuId} onMenuItemClick={handleMenuItemClick} isShow={isShowFullIndicator} />
      </Box>
    </>
  );
}
