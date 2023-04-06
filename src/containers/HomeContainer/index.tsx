
import { Box } from '@mui/material';
import Banner from '~templates/Banner';
import Section from '~templates/Section';
import Skill from '~templates/Skill';
import ProjectContainer from './ProjectContainer';
import AboutMeContainer from './AboutMeContainer';
import MenuControl, { MenuItemTypes } from '~organisms/MenuControl';
import { createContext, useMemo, useState } from 'react';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';


interface IndicatorContextProps  {
  onInView?: () => void;
}

const IndicatorContext = createContext<IndicatorContextProps>({
});

export interface HomeContainerProps {
}

export default function HomeContainer (props: HomeContainerProps) {

  const [activeMenuId, setActiveMenuId] = useState<number>(1);
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
        id: 3,
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

  const indicatorData = useMemo<IndicatorContextProps>(() => {
    return {
      
    }
  }, [])
  return (
    <>
      <IndicatorContext.Provider value={indicatorData}>
        <Section modifiers={['noPt']}>
            <Banner />
          </Section>
          <Section id="skills">
            <Skill />
          </Section>
          <Section id="projects">
            <ProjectContainer />
          </Section>
          <Section id="about">
            <AboutMeContainer />
          </Section>
          <Box sx={{position: 'fixed', top: '100px', right: '50px', zIndex: 101}}>
            <MenuControl menuList={menuList} activeMenuId={activeMenuId} onMenuItemClick={setActiveMenuId}/>
          </Box>
      </IndicatorContext.Provider>
    </>
  );
}
