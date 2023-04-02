import Banner from '~templates/Banner';
import Project from '~templates/Project';
import Section from '~templates/Section';
import Skill from '~templates/Skill';

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
        <Project />
      </Section>
    </>
  );
}
