import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInContainer from '../../containers/SignInContainer';
import { useAppSelector } from '../../store';
import { getSystemUser } from '../../store/system';

interface SignInProps {}

const SignInPage: React.FC<SignInProps> = (props) => {
  const user = useAppSelector(getSystemUser);
  const navigate = useNavigate();
  useEffect(() => {
    if(user){
      navigate('/');
    }
  }, [])
  return (
  <div className="p-signIn">
    <SignInContainer />
  </div>
)}

export default SignInPage;
