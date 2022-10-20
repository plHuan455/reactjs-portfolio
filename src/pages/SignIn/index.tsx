import SignInContainer from '../../containers/SignInContainer';

interface SignInProps {}

const SignInPage: React.FC<SignInProps> = (props) => (
  <div className="p-signIn">
    <SignInContainer />
  </div>
);

export default SignInPage;
