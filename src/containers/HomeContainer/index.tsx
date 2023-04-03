import Banner from '~templates/Banner';
import Section from '~templates/Section';
import Skill from '~templates/Skill';
import ProjectContainer from './ProjectContainer';
import AboutMeContainer from './AboutMeContainer';

export interface HomeContainerProps {
}

export default function HomeContainer (props: HomeContainerProps) {
  return (
    <>
      <Section modifiers={['noPt']}>
        <Banner />
      </Section>
      <Section id={"skills"}>
        <Skill />
      </Section>
      <Section id={"projects"}>
        <ProjectContainer />
      </Section>
      <Section id="about">
        <AboutMeContainer />
      </Section>
    </>
  );
}
