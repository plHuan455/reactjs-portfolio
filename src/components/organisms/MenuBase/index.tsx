import { Menu, MenuItem, Box, Button } from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';

export interface MenuItemTypes {
  value: string;
  label: string;
  icon: JSX.Element;
}

export interface MenuBaseProps {
  menuList: MenuItemTypes[];
  onMenuItemClick?: (value: string) => void;
}

const MenuBase: React.FC<MenuBaseProps> = ({
  menuList,
  onMenuItemClick,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement>();
  return (
    <Box>
      <Button onClick={(e) => {
        const el = e.target as HTMLButtonElement;
        setAnchorEl(el);
      }}>
        <MoreVertIcon sx={{color: "#4C5863"}}/>
      </Button>
      <Menu className="o-menuBase" open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(undefined)}>
        {menuList.map(value => (
          <MenuItem onClick={() => onMenuItemClick && onMenuItemClick(value.value)}>
            <Box sx={{display: 'flex', flexWrap: 'nowrap', textAlign: 'center'}}>
              <Box 
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mr: (theme) => theme.spacing(8),
                  '& .MuiSvgIcon-root': {
                    fontSize: (theme) => theme.spacing(16)
                  }
                }}
              >{value.icon}</Box>
              <Typography sx={{fontSize: (theme) => theme.spacing(14), flexGrow: 1}}>{value.label}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
};

export default MenuBase;

