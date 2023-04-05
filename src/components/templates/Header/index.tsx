import { Box, Button, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { fontFamilyMixin, rem } from '~mixin';
import ContainerBase from '~organisms/ContainerBase';
import { useState } from 'react';

export interface HomeProps {
  onMenuClick?: (menuName: 'home' | 'about' | 'skills' | 'projects') => void;
}

const Header: React.FC<HomeProps> = () => {

  const [isShowMobileMenu, setIsShowMobileMenu] = useState<boolean>(false);
  
  const handleMenuClick = (menuName: 'home' | 'about' | 'skills' | 'projects') => {
    const element = document.getElementById(menuName);
    if(element) {
      element.scrollIntoView();
    }
  }

  return (
    <header className="t-header">
      <Box sx={{ ...fontFamilyMixin('jost'), pt: rem(20) }}>
        <ContainerBase sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ color: 'white', fontSize: rem(22), fontWeight: 800, minWidth: rem(193) }} >
            PLHuan
          </Box>
          <Box sx={{position: 'relative'}}>
            <Box sx={{display: {xs: 'block', sm: 'none', cursor: 'pointer'}}} onClick={() => setIsShowMobileMenu(preState => !preState)}>
              <MenuIcon sx={{color: 'white', fontSize: rem(36)}}/>
            </Box>
            <List
              className='animate animate-03 animate-fadeInRight'
              sx={{
                fontSize: rem(18),
                fontWeight: 700,
                display: {xs: isShowMobileMenu ? 'flex' : 'none', sm: 'flex'},
                color: 'white',
                position: {xs : 'absolute', sm: 'static'},
                flexDirection: {xs: 'column', sm: 'row'},
                top: '100%',
                right: 0,
                gap: {xs: rem(8), sm: 0},
                '& .MuiListItem-root': {
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  borderRadius: rem(16),
                  fontSize: { xs: rem(14), sm: rem(18)},
                  justifyContent: 'center',
                  borderRight: {xs : `${rem(1)} solid rgba(255, 255, 255, 0.8)`, sm: 0},
                  '&:hover': { 
                    color: '#1b0722',
                    backgroundColor: '#ffffff',
                  },
                },
              }}>
              <ListItem onClick={() => handleMenuClick('home')}>Home</ListItem>
              <ListItem onClick={() => handleMenuClick('skills')}>Skills</ListItem>
              <ListItem onClick={() => handleMenuClick('projects')}>Projects</ListItem>
              <ListItem onClick={() => handleMenuClick('about')}>About Me</ListItem>
            </List>
          </Box>
        </ContainerBase>
      </Box>
    </header>
  )
}

export default Header;