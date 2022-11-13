import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpContainer from '../../containers/SignUpContainer';
import { useAppSelector } from '../../store';
import { getSystemUser } from '../../store/system';

interface SignUpProps {}

const SignUpPage: React.FC<SignUpProps> = (props) => {
  const user = useAppSelector(getSystemUser);
  const navigate = useNavigate();
  useEffect(() => {
    if(user){
      navigate('/');
    }
  }, [])
  return (
  <div className="p-signUp">
    <SignUpContainer />
  </div>
)};

export default SignUpPage;
