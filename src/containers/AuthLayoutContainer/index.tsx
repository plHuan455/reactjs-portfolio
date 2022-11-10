import { useNavigate } from "react-router-dom";
import useNavigateBack from "~hooks/useNavigateBack";
import AuthLayout from "~templates/AuthLayout";

interface AuthLayoutContainerProps {
  children: React.ReactNode
}

const AuthLayoutContainer: React.FC<AuthLayoutContainerProps> = ({children}) => {
  const navigateBack = useNavigateBack();
  return <AuthLayout onHeaderControlClick={() => navigateBack()}>{children}</AuthLayout>
}

export default AuthLayoutContainer;