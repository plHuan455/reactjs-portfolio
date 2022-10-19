import Section from "~templates/Section";
import FormContainer from "./FormContainer";

interface SignInContainerProps {}

const SignInContainer: React.FC<SignInContainerProps> = () => {
  return <>
    <Section>
      <FormContainer />
    </Section>
  </>;
};

export default SignInContainer;