import { Box, Typography } from '@mui/material';
import React from 'react';
import skillData from '~assets/dataDummy/skillDummy';
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

export interface ProjectProps {
}

const Project: React.FC<ProjectProps> = () => {
  return (
    <Box className="t-project" sx={{color: 'white', position: 'relative'}}>
      <Box sx={{position: 'absolute', top: rem(365), right: 0, opacity: 0.5}}>
        <img src={icon5} alt="" />
      </Box>
      <ContainerBase>
        <Typography sx={{fontSize: rem(24), fontWeight: 700, pb: rem(50)}}>
          Projects
        </Typography>
        <Box>
          <ProjectDetail 
            name="Metanode Mail" 
            description='A web application used for composing, sending, and viewing emails, where each
            email sent by an employee is managed by their respective supervisor. The supervisor has the
            authority to approve or reject the email. This application will be deployed for multiple companies
            in various countries.'
            technology='React + Typescript, Redux, Webpack, SCSS, MaterialUI, Websocket, Firebase.'
            teamSize='3 members, 2 front-end, 1 back-end'
            imgSrcList={[metanodeSrc6, metanodeSrc2, metanodeSrc4]}
          />
        </Box>
        <Box sx={{mt: rem(100)}}>
          <ProjectDetail
            isRevertRow
            name="Novaland" 
            description='A web application used for composing, sending, and viewing emails, where each
            email sent by an employee is managed by their respective supervisor. The supervisor has the
            authority to approve or reject the email. This application will be deployed for multiple companies
            in various countries.'
            technology='React + Typescript, Redux, SCSS, Bootstrap, ESLint, Storybook.'
            imgSrcList={[novaLand1, novaLand2, novaLand3]}
            teamSize='8 members, 5 front-end, 3 back-end' 
          />
        </Box>
      </ContainerBase>
    </Box>
  )
};

Project.defaultProps = {
  children: undefined,
};

export default Project;

