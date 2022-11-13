import { useNavigate } from "react-router-dom";
import useNavigateBack from "~hooks/useNavigateBack";
import AuthLayout from "~templates/AuthLayout";
import { renderPageUrl } from "../../navigation";

interface AuthLayoutContainerProps {
  children: React.ReactNode
}

const AuthLayoutContainer: React.FC<AuthLayoutContainerProps> = ({ children }) => {
  const navigate = useNavigate();
  return <AuthLayout
    backBtnTitle="Trang chủ"
    onHeaderControlClick={() => navigate(renderPageUrl('HOME'))}
  >
    {children}
  </AuthLayout>
}

export default AuthLayoutContainer;