import { MdArrowBackIosNew } from "react-icons/md";
import Icon from "~atoms/Icon";
import Text from "~atoms/Text";
import Section from "~templates/Section";
import SignInFormContainer from "./SignInFormContainer";
import SignInHeaderControlContainer from "./SignInHeaderControlContainer";

interface SignInContainerProps {}

const SignInContainer: React.FC<SignInContainerProps> = () => {
  return <>
    <Section className="p-signIn_control" modifiers={['noPb', 'noPt']}>
      <SignInHeaderControlContainer />
    </Section>
    <Section className="p-signIn_form" modifiers={['noPb', 'noPt']}>
      <SignInFormContainer />
    </Section>
  </>;
};

export default SignInContainer;