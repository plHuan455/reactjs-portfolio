import { Box, Button, List, ListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fontFamilyMixin, rem } from '~mixin';
import ContainerBase from '~organisms/Container';

const Header: React.FC = () => {
  return (
    <Box className="t-header" sx={{ ...fontFamilyMixin('jost'), pt: rem(20)}}>
      <ContainerBase sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ color: 'white', fontSize: rem(18), fontWeight: 800, minWidth: rem(193) }} >
          AGENCY
        </Box>
        <List
          sx={{
            fontSize: rem(18),
            fontWeight: 700,
            color: 'white',
            display: 'flex',
            '& .MuiListItem-root': { 
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              '&:hover': {color: '#9a9090'},
            },
          }}>
          <ListItem>Home</ListItem>
          <ListItem>Skills</ListItem>
          <ListItem>Projects</ListItem>
          <ListItem>About Me</ListItem>
        </List>
        <Button
          sx={{
            fontSize: rem(18),
            fontWeight: 700,
            color: '#FFAD60',
            borderRadius: rem(8),
            px: rem(33),
            py: rem(16),
            border: `${rem(2)} solid #FFAD60`,
            '&:hover': {
              backgroundColor: '#ffad6017'
            }
          }}
        >
          Contact Me
        </Button>
      </ContainerBase>
    </Box>
  )
}

export default Header;