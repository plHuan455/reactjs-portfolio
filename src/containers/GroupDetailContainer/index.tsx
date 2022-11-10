import Section from "~templates/Section";
import MemberManagerContainer from "./MemberManagerContainer";

interface GroupDetailContainerProps {}

const GroupDetailContainer: React.FC<GroupDetailContainerProps> = () => {
  return <>
    <Section>
      <MemberManagerContainer />
    </Section>
  </>;
};

export default GroupDetailContainer;