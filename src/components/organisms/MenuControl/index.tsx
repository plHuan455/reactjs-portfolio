import { Box, List, ListItem } from '@mui/material';
import React, { useMemo } from 'react';
import menuControlIcon from '~assets/icons/ic_circle_menu.svg';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import Image from '~atoms/Image';
import { rem } from '~mixin';

export interface MenuItemTypes {
  id: number;
  icon: JSX.Element;
  color?: string;
}
export interface MenuControlProps {
  activeMenuId?: number;
  menuList: MenuItemTypes[];
  onMenuItemClick: (id: number) => void;
}

const MenuControl: React.FC<MenuControlProps> = ({
  activeMenuId,
  menuList = [],
  onMenuItemClick,
}) => {
  const activeIndex = useMemo(() => {
    const foundId = menuList.findIndex(value => value.id === activeMenuId)
    return foundId === -1 ? 0 : foundId;
  }, [menuList, activeMenuId]);

  return (
    <Box className="o-menuControl" sx={{ position: 'relative', height: rem(200),
    }}>
      {activeMenuId !== undefined && (
        <Image src={menuControlIcon}
          sx={{
            width: rem(28),
            position: 'absolute',
            right: `calc(100% - ${rem(0.2)})`,
            my: 'calc(3.5/28 * 100%)',
            top: rem(activeIndex * 50 + activeIndex * 4),
            transitionDuration: '0.3s',
            filter: 'brightness(1.1)',
            zIndex: -1,
          }}
        />
      )}
      <List
        sx={{
          py: rem(19),
          backgroundColor: 'white',
          borderRadius: rem(8),
          color: '#474646',
          display: 'flex',
          flexDirection: 'column',
          background: '#c1cdd7',
          boxShadow: `${rem(30)} ${rem(30)} ${rem(30)} -${rem(10)} rgba(0,0,0,0.15), inset ${rem(5)} ${rem(5)} ${rem(2)} rgba(255,255,255,0.75), -${rem(2)} -${rem(3)} ${rem(7)} ${rem(0)} rgba(255, 255, 255, 0.289), inset -${rem(1)} -${rem(1)} ${rem(10)} rgba(0,0,0,0.2)`,
          gap: rem(4),
          '& .MuiListItem-root': {
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: rem(50),
            height: rem(50),
            borderRadius: '50%',
            cursor: 'pointer',
            transitionDuration: '0.5s',
            // '&: hover': {
            //   transform: 'translateX(-50%)'
            // }
          }
        }}>
        {menuList.map(value => {
          const isActive = value.id === activeMenuId;
          return (
            <ListItem
              key={`key-menuControl-item-${value.id}`}
              sx={{
                background: isActive ? value.color ?? 'orange' : 'transparent',
                transform: isActive ? 'translateX(-48%)' : undefined,
                color: isActive ? 'white' : undefined,
                boxShadow: isActive ? `${rem(8)} ${rem(2)} ${rem(19)} ${rem(-4)} ${value.color ?? 'orange'}` : undefined,
              }}
              onClick={() => onMenuItemClick(value.id)}
            >
              {value.icon}
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
};

export default MenuControl;

