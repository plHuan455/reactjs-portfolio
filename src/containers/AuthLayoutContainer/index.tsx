import { useNavigate } from "react-router-dom";
import AuthLayout from "~templates/AuthLayout";

interface AuthLayoutContainerProps {
  children: React.ReactNode
}

const AuthLayoutContainer: React.FC<AuthLayoutContainerProps> = ({children}) => {
  const navigate = useNavigate();
  return <AuthLayout onHeaderControlClick={() => navigate(-1)}>{children}</AuthLayout>
}

export default AuthLayoutContainer;