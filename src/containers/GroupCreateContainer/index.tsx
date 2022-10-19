import Section from "../../components/templates/Section";
import GroupCreateFormContainer from "./GroupCreateFormContainer";

export interface GroupCreateContainerProps {}

const GroupCreateContainer: React.FC<GroupCreateContainerProps> = () => {
  return <Section>
    <GroupCreateFormContainer />
  </Section>;
}

export default GroupCreateContainer;