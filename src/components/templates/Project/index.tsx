import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { rem } from '~mixin';
import ContainerBase from '~organisms/Container';
import ProjectDetail from '~organisms/ProjectDetail';
import metanodeSrc2 from '~assets/images/metanode-2.png';
import metanodeSrc4 from '~assets/images/metanode-4.png';
import metanodeSrc6 from '~assets/images/metanode-6.png';
import novaLand1 from '~assets/images/novaland-1.png';
import novaLand2 from '~assets/images/novaland-2.png';
import novaLand3 from '~assets/images/novaland-3.png';
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
        <SectionTitle title='Projects' subtitle='Projects I have participated in' sx={{pb: rem(96)}}/>
        <Box sx={{
          '& .t-project_item:nth-child(n+2)': {
            mt: rem(120)
          }
        }}>
          {projectList.map((value, index) => (
            <Box key={`key-project-${value.name}`} className='t-project_item'>
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

