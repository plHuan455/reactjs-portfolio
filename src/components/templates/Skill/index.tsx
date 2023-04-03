import { Box, List, ListItem, Typography } from '@mui/material';
import LazyLoad from 'react-lazyload';
import iconGitlab from '~assets/icons/ic_gitlab.svg';
import iconGit from '~assets/icons/ic_git.svg';
import { rem } from '~mixin';
import ContainerBase from '~organisms/Container';
import SkillList, { SkillItemTypes } from '~molecules/SkillList';
import skillData from '~assets/dataDummy/skillDummy';
import { useMemo } from 'react';
import SectionTitle from '~molecules/SectionTitle';

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
        <SectionTitle title='Skills' subtitle='Skills in using languages, frameworks, and tools' sx={{pb: rem(40)}}/>
        <Box sx={{ borderBottom: `${rem(2)} solid #c48850cd`, pb: rem(18) }}>
          <SkillList skillList={skillList1} />
        </Box>
        <Box sx={{ borderBottom: `${rem(2)} solid #c48850cd`, py: rem(24) }}>
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

