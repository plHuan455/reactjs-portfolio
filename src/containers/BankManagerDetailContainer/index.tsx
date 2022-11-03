import Section from "../../components/templates/Section";
import CalendarContainer from "./CalendarContainer";

interface BankManagerDetailContainerProps {
}

const BankManagerDetailContainer: React.FC<BankManagerDetailContainerProps> = () => {
  return <>
    <Section modifiers={['noPt']}>
      <CalendarContainer />
    </Section>
  </>
}

export default BankManagerDetailContainer;