import { Box, List, ListItem, Typography } from '@mui/material';
import LazyLoad from 'react-lazyload';
import React, { useMemo } from 'react';
import iconHtml from '~assets/icons/ic_html.svg';
import iconJs from '~assets/icons/ic_js.svg';
import iconCss from '~assets/icons/ic_css.svg';
import iconJquery from '~assets/icons/ic_jquery.svg';
import iconTypescript from '~assets/icons/ic_typescript.svg';
import iconReactJs from '~assets/icons/ic_react.svg';
import iconReactNative from '~assets/icons/ic_reactNative.svg';
import iconBootstrap from '~assets/images/bootstrap.png';
import iconMui from '~assets/images/mui.png';
import iconRedux from '~assets/icons/ic_redux.svg';
import iconTailwindCss from '~assets/icons/ic_tailwind.svg';
import iconSass from '~assets/images/sass.png';
import { rem } from '~mixin';
import ContainerBase from '~organisms/Container';
import SkillList, { SkillItemTypes } from '~organisms/SkillList';

export interface SkillProps {
}

const Skill: React.FC<SkillProps> = () => {

  const skillList1 = useMemo<SkillItemTypes[]>(() => {
    return [
      { imgSrc: iconHtml, label: 'HTML', imgScale: 0.8},
      { imgSrc: iconCss, label: 'CSS', imgScale: 0.7},
      { imgSrc: iconJs, label: 'JAVASCRIPT', objectFit: 'cover'},
      { imgSrc: iconTypescript, label: 'TYPESCRIPT', imgScale: 0.65},
    ]
  }, [])
  const skillList2 = useMemo<SkillItemTypes[]>(() => {
    return [
      { imgSrc: iconReactJs, label: 'REACTJS', imgScale: 0.8},
      { imgSrc: iconRedux, label: 'REDUX', imgScale: 0.6},
      { imgSrc: iconReactNative, label: 'REACT NATIVE', imgScale: 0.85},
      { imgSrc: iconJquery, label: 'JQUERY', imgScale: 0.67},
      { imgSrc: iconSass, label: 'SCSS', imgScale: 0.8},
      { imgSrc: iconMui, label: 'MATERIALUI', imgScale: 0.8},
      { imgSrc: iconTailwindCss, label: 'TAILWINDCSS', imgScale: 0.8},
      { imgSrc: iconBootstrap, label: 'BOOTSTRAP', imgScale: 0.85, objectFit: 'contain'},
    ]
  }, [])
  const skillList3 = useMemo<SkillItemTypes[]>(() => {
    return [
    ]
  }, [])

  return (
    <Box className="t-skill" sx={{color: 'white'}}>
      <ContainerBase>
        <Typography sx={{fontSize: rem(32), fontWeight: 700}}>Skills</Typography>
        <Box>
          <LazyLoad height={400}>
            <SkillList skillList={skillList1} />
          </LazyLoad>
        </Box>
        <Box>
          <SkillList skillList={skillList2} />
        </Box>
        <Box>
          <SkillList skillList={skillList3} />
        </Box>
      </ContainerBase>
    </Box>
  )
};

export default Skill;

