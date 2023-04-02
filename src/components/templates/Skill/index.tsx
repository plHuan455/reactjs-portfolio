import { Box, List, ListItem, Typography } from '@mui/material';
import LazyLoad from 'react-lazyload';
import iconGitlab from '~assets/icons/ic_gitlab.svg';
import iconGit from '~assets/icons/ic_git.svg';
import { rem } from '~mixin';
import ContainerBase from '~organisms/Container';
import SkillList, { SkillItemTypes } from '~molecules/SkillList';
import skillData from '~assets/dataDummy/skillDummy';
import { useMemo } from 'react';

export interface SkillProps {
}

const Skill: React.FC<SkillProps> = () => {
  const skillList1 = useMemo<SkillItemTypes[]>(() => {
    return [
      skillData.html,
      skillData.css,
      skillData.javascript,
      skillData.typescript,
      skillData.reactjs,
      skillData.redux,
      skillData.reactNative,
      skillData.nodejs,
      skillData.jquery,
    ]
  }, [])

  const skillList2 = useMemo<SkillItemTypes[]>(() => {
    return [
      skillData.sass,
      skillData.muiui,
      skillData.tailwindcss,
      skillData.bootstrap,
    ]
  }, [])

  const skillList3 = useMemo<SkillItemTypes[]>(() => {
    return [
      { imgSrc: iconGit, label: 'GIT', imgScale: 0.8 },
      { imgSrc: iconGitlab, label: 'GITLAB', imgScale: 0.75 },
    ]
  }, [])

  return (
    <Box className="t-skill" sx={{ color: 'white' }}>
      <ContainerBase>
        <Typography sx={{ fontSize: rem(24), fontWeight: 700 }}>Skills</Typography>
        <Box className='animate animate-fadeInRight' sx={{ borderBottom: `${rem(2)} solid #c48850cd`, py: rem(18) }}>
          <SkillList skillList={skillList1} />
        </Box>
        <Box className='animate animate-fadeInLeft' sx={{ borderBottom: `${rem(2)} solid #c48850cd`, py: rem(24) }}>
          <SkillList skillList={skillList2} />
        </Box>
        <Box className='animate animate-fadeInRight'>
          <SkillList skillList={skillList3} />
        </Box>
      </ContainerBase>
    </Box>
  )
};

export default Skill;

