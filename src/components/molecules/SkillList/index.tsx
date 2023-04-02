import { Box, List, ListItem, Typography } from '@mui/material';
import React, { useMemo } from 'react';
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
  size?: 'small' | 'normal'
}

const SkillList: React.FC<SkillListProps> = ({
  skillList,
  size = 'normal'
}) => {
  const {textSize, width} = useMemo(() => {
    switch(size) {
      case 'normal': return { textSize: rem(14), width: rem(108)};
      case 'small': return { textSize: rem(8), width: rem(40)};
    }
  }, [size])

  return (
    <List className="o-skillList" sx={{display: 'flex', mt: rem(20), gap: rem(32), flexWrap: 'wrap', width: '100%', overflow: 'h'}}>
      {skillList.map(value => (
        <ListItem className="o-skillList_item" sx={{ width, padding: 0, display: 'block'}} key={`skillList-item-${value.label}`}>
          <Box
            sx={{
              border: `${rem(1)} solid #FFAD60`,
              borderRadius: '50%', aspectRatio: '1 / 1',
              display: 'flex',
              justifyContent: 'center',
              flexShrink: 1,
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
          {size!=='small' && <Typography sx={{ color: value.color ? value.color : '#FFAD60', fontSize: textSize, fontWeight: 600, textAlign: 'center', mt: rem(20) }}>
            {value.label}
          </Typography>}
        </ListItem>
      ))}

    </List>
  )
};

export default SkillList;

