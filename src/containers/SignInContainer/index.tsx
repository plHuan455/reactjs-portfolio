import { MdArrowBackIosNew } from "react-icons/md";
import Icon from "~atoms/Icon";
import Text from "~atoms/Text";
import Section from "~templates/Section";
import SignInFormContainer from "./SignInFormContainer";

interface SignInContainerProps {}

const SignInContainer: React.FC<SignInContainerProps> = () => {
  return <>
    <Section className="p-signIn_form">
      <SignInFormContainer />
    </Section>
  </>;
};

export default SignInContainer;