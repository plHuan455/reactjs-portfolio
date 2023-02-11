import { useNavigate } from "react-router-dom"
import Container from "~organisms/Container"
import HeaderControl from "~templates/HeaderControl"

interface SignInHeaderControlContainerProps {}

const SignInHeaderControlContainer: React.FC<SignInHeaderControlContainerProps> = () => {
  const navigate = useNavigate();
  return <HeaderControl backBtnTitle="" onClick={() => navigate(-1)} />
}

export default SignInHeaderControlContainer
