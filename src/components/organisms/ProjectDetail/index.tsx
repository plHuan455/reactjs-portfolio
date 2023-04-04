import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { rem, resetButton } from '~mixin';
import CarouselBase from '~organisms/CarouselBase';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export interface ProjectDetailProps {
  isRevertRow?: boolean;
  name: string;
  description: string;
  teamSize?: string;
  technology: string;
  color?: string;
  imgSrcList: string[];
  onImageClick?: (index: number) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  isRevertRow,
  name,
  color,
  description,
  teamSize,
  technology,
  imgSrcList,
  onImageClick,
}) => {
  return (
    <Box
      className="o-projectDetail"
      sx={{
        display: 'flex',
        gap: rem(50),
        flexDirection: {
          xs: 'column-reverse',
          sm: isRevertRow ? 'row-reverse' : 'row'
        }
      }}
    >
      <Box className="t-project_carousel" sx={{ width: {xs: '100%', sm: `calc(676 / 1210 * 100%)`} }}>
        <CarouselBase>
          {imgSrcList.map((value, index) => (
            <Box
              key={`key-projectDetail-${value}`}
              className="t-project_carousel_item"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                '& img': {
                  width: '100%',
                  aspectRatio: '16 / 9',
                  objectFit: 'contain',
                },
                '&: hover .t-project_carousel_viewBtn': {
                  display: 'flex'
                }
              }}
            >
              <Button
                className='t-project_carousel_viewBtn'
                sx={{
                  ...resetButton,
                  display: 'none',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  right: rem(24),
                  top: rem(24),
                  padding: rem(8),
                  backgroundColor: '#3a3a3a',
                  '&: hover': {
                    backgroundColor: '#131313',
                  }
                }}
                onClick={() => onImageClick && onImageClick(index)}
              >
                <RemoveRedEyeIcon sx={{ color: 'rgba(255, 255, 255, 0.8)' }} />
              </Button>
              <img src={value} alt="" />
            </Box>
          ))}
        </CarouselBase>
      </Box>

      <Box sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
        <Typography variant='h3' sx={{ color: color ?? 'white', fontSize: rem(44) }}>{name}</Typography>
        <Typography variant='body2' sx={{ mt: rem(18) }}>{description}</Typography>
        <Box sx={{ mt: rem(18) }}>
          <Box>
            <Typography sx={{ fontWeight: 700, color: '#ffbe82' }}>Technologies:</Typography>
            <Typography sx={{ mt: rem(8) }} variant='body2'>{technology}</Typography>
          </Box>
          {teamSize !== undefined && (
            <Box>
              <Typography sx={{ fontWeight: 700, color: '#ffbe82', mt: rem(12) }}>Team Size:</Typography>
              <Typography sx={{ mt: rem(8) }} variant='body2'>{teamSize}</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
};

export default ProjectDetail;

