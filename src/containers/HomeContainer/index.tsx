import Banner from '~templates/Banner';
import Section from '~templates/Section';
import Skill from '~templates/Skill';

export interface HomeContainerProps {
}

export default function HomeContainer (props: HomeContainerProps) {
  return (
    <>
      <Section modifiers={['noPt', 'noPb']}>
        <Banner />
      </Section>
      <Section modifiers={['noPb']}>
        <Skill />
      </Section>
    </>
  );
}
