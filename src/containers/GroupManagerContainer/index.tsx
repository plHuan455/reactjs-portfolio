import Section from "~templates/Section";
import ManagerContainer from "./ManagerContainer";

interface GroupManagerContainerProps {}

const GroupManagerContainer: React.FC<GroupManagerContainerProps> = () => {
  return <>
    <Section modifiers={['noPb', 'noPt']}>
      <ManagerContainer />
    </Section>
  </>;
};

export default GroupManagerContainer;