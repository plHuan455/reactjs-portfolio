import React from 'react';
import { Box, Typography } from '@mui/material';
import { rem } from '~mixin';
import SkillList, { SkillItemTypes } from '~molecules/SkillList';
import CarouselBase from '~organisms/CarouselBase';

export interface ProjectDetailProps {
  isRevertRow?: boolean;
  name: string;
  description: string;
  teamSize?: string;
  technology: string;
  imgSrcList: string[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  isRevertRow,
  name,
  description,
  teamSize,
  technology,
  imgSrcList,
}) => {
  return (
    <Box className="o-projectDetail" sx={{ display: 'flex', gap: rem(50), flexDirection: isRevertRow ? 'row-reverse' : undefined }}>
      <Box className="t-project_carousel" sx={{ width: `calc(676 / 1210 * 100%)` }}>
        <CarouselBase>
          {imgSrcList.map(value => (
            <Box
              className="t-project_carousel_item"
              sx={{
                display: 'flex',
                alignItems: 'center',
                '& img': {
                  width: '100%',
                  aspectRatio: '16 / 9',
                  objectFit: 'contain'
                }
              }}
            >
              <img src={value} alt="" />
            </Box>
          ))}
        </CarouselBase>
      </Box>

      <Box sx={{color: 'rgba(255, 255, 255, 0.8)'}}>
        <Typography variant='h3' sx={{color: 'white'}}>{name}</Typography>
        <Typography variant='body2' sx={{mt: rem(18)}}>{description}</Typography>
        <Box sx={{mt: rem(18)}}>
          <Box>
            <Typography sx={{fontWeight: 700, color: '#ffbe82'}}>Technologies:</Typography>
            <Typography sx={{mt: rem(8)}} variant='body2'>{technology}</Typography>
          </Box>
          {teamSize !== undefined && (
            <Box>
              <Typography sx={{fontWeight: 700, color: '#ffbe82', mt: rem(12)}}>Team Size:</Typography>
              <Typography sx={{mt: rem(8)}} variant='body2'>{teamSize}</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
};

export default ProjectDetail;

