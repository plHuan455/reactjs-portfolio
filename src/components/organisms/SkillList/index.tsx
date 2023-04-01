import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import { rem } from '~mixin';

export interface SkillItemTypes {
  imgSrc: string;
  label: string;
  imgScale?: number; // 0 -> 1
  objectFit?: 'contain' | 'cover',
  color?: string;
}

export interface SkillListProps {
  skillList: SkillItemTypes[];
}

const SkillList: React.FC<SkillListProps> = ({
  skillList
}) => {
  return (
    <List className="o-skillList" sx={{display: 'flex', mt: rem(20), gap: rem(32)}}>
      {skillList.map(value => (
        <ListItem className="o-skillList_item" sx={{ width: rem(112), padding: 0, display: 'block'}}>
          <Box
            sx={{
              border: `${rem(1)} solid #FFAD60`,
              borderRadius: '50%', aspectRatio: '1 / 1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '& img': { width: '100%', aspectRatio: '1 / 1' },
              '& .o-skillItem_icon' : {
                width: value.imgScale === undefined ? '100%' : `${100*value.imgScale}%`,
                objectFit: value.objectFit ?? 'contain'
              }
            }}
          >
            <img className="o-skillItem_icon" src={value.imgSrc} alt="" />
          </Box>
          <Typography sx={{ color: value.color ? value.color : '#FFAD60', fontSize: rem(16), fontWeight: 600, textAlign: 'center', mt: rem(20) }}>
            {value.label}
          </Typography>
        </ListItem>
      ))}

    </List>
  )
};

export default SkillList;

