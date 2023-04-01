import React from 'react';
import { Box, Typography } from '@mui/material';
import { rem } from '~mixin';

export interface SkillItemProps {
  name: string;
  iconSrc: string;
}

const SkillItem: React.FC<SkillItemProps> = ({name, iconSrc}) => {
  return (
    <Box className="o-skillItem">
      <Box 
        sx={{
          border: `${rem(1)} solid #FFAD60`, 
          borderRadius: '50%', aspectRatio: '1 / 1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& img': { width: '100%', aspectRatio: '1 / 1'}
        }}
      >
        <img className="o-skillItem_icon" src={iconSrc} alt="" />
      </Box>
      <Typography sx={{color: '#FFAD60', fontSize: rem(16), fontWeight: 600, textAlign: 'center', mt: rem(20)}}>
        {name}
      </Typography>
    </Box>
  )
};

export default SkillItem;

