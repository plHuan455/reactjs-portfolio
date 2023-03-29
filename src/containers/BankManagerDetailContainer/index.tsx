import { useState } from "react";
import Section from "../../components/templates/Section";
import CalendarContainer from "./CalendarContainer";

interface BankManagerDetailContainerProps {
}

const BankManagerDetailContainer: React.FC<BankManagerDetailContainerProps> = () => {
  return <>
    <Section>
      <CalendarContainer />
    </Section>
  </>
}

export default BankManagerDetailContainer;