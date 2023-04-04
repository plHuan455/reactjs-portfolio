import { Box, Button, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { fontFamilyMixin, rem } from '~mixin';
import ContainerBase from '~organisms/ContainerBase';

export interface HomeProps {
  onMenuClick?: (menuName: 'home' | 'about' | 'skills' | 'projects') => void;
}

const Header: React.FC<HomeProps> = () => {
  
  const handleMenuClick = (menuName: 'home' | 'about' | 'skills' | 'projects') => {
    const element = document.getElementById(menuName);
    if(element) {
      element.scrollIntoView();
    }
  }

  return (
    <header className="t-header">
      {/* <Box sx={{ ...fontFamilyMixin('jost'), pt: rem(20) }}>
        <ContainerBase sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ color: 'white', fontSize: rem(22), fontWeight: 800, minWidth: rem(193) }} >
            PLHuan
          </Box>
          <Box sx={{display: {xs: 'block', sm: 'none', cursor: 'pointer'}}}>
            <MenuIcon sx={{color: 'white', fontSize: rem(36)}}/>
          </Box>
          <List
            sx={{
              fontSize: rem(18),
              fontWeight: 700,
              color: 'white',
              display: { xs: 'none', sm: 'none'},
              '& .MuiListItem-root': {
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                borderRadius: rem(16),
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
        </ContainerBase>
      </Box> */}
    </header>
  )
}

export default Header;