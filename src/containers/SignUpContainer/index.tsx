import Section from "~templates/Section";
import SignUpFormContainer from "./SignUpForm";

interface SignUpContainerProps {}

const SignUpContainer: React.FC<SignUpContainerProps> = () => {
  return <>
    <Section>
      <SignUpFormContainer />
    </Section>
  </>  
};

export default SignUpContainer;