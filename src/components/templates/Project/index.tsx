import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { rem } from '~mixin';
import ContainerBase from '~organisms/ContainerBase';
import ProjectDetail from '~organisms/ProjectDetail';
import icon5 from "~assets/icons/ic_5.svg";
import SectionTitle from '~molecules/SectionTitle';
// import "yet-another-react-lightbox/styles.css";


export interface ProjectItemTypes {
  name: string;
  description: string;
  technology: string;
  teamSize?: string;
  imgSrcList: string[];
  color?: string;
}
export interface ProjectProps {
  projectList: ProjectItemTypes[];
  isShowFull?: boolean;
  onShowMoreClick?: () => void;
  onProjectImageClick?: (projectIndex: number, imgIndex: number) => void;
}

const Project: React.FC<ProjectProps> = ({
  projectList,
  isShowFull,
  onShowMoreClick,
  onProjectImageClick,
}) => {
  return (
    <Box className="t-project" sx={{ color: 'white', position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: rem(365), right: 0, opacity: 0.5 }}>
        <img src={icon5} alt="" />
      </Box>
      <ContainerBase>
        <SectionTitle title='Projects' subtitle='Projects I have participated in' sx={{ pb: { xs: rem(44), sm: rem(96)} }} />
        <Box sx={{
          maxWidth: '100%',
          overflow: 'hidden',
          '& .t-project_item ~ .t-project_item': {
            mt: rem(120)
          }
        }}>
          {projectList.map((value, index) => (
            <Box
              key={`key-project-${value.name}`}
              className='t-project_item animate animate-fadeInRight'
              sx={{
                maxWidth: '100%',
              }}
            >
              <ProjectDetail
                isRevertRow={index % 2 !== 0}
                name={value.name}
                color={value.color}
                description={value.description}
                technology={value.technology}
                teamSize={value.teamSize}
                imgSrcList={value.imgSrcList}
                onImageClick={(itemIndex) => onProjectImageClick && onProjectImageClick(index, itemIndex)}
              />
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: rem(64) }} >
          <Button
            variant='contained'
            sx={{
              color: 'rgba(255, 255, 255, 0.75)',
              fontSize: rem(16),
              fontWeight: 700,
              backgroundColor: '#0b75df6b',
            }}
            onClick={onShowMoreClick}
          >
            {isShowFull ? 'Hide Some Projects' : 'More Projects'}
          </Button>
        </Box>
      </ContainerBase>
    </Box>
  )
};

export default Project;

