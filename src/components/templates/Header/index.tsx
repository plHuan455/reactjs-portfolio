import { Box, Button, List, ListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fontFamilyMixin, rem } from '~mixin';
import ContainerBase from '~organisms/Container';

const Header: React.FC = () => {
  return (
    <header className="t-header">
      <Box sx={{ ...fontFamilyMixin('jost'), pt: rem(20) }}>
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
                '&:hover': { color: '#9a9090' },
              },
            }}>
            <ListItem>Home</ListItem>
            <ListItem>Skills</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>About Me</ListItem>
          </List>
        </ContainerBase>
      </Box>
    </header>
  )
}

export default Header;