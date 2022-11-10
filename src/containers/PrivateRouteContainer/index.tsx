import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { renderPageUrl } from "../../navigation";
import { useAppSelector } from "../../store"
import { getSystemUser } from "../../store/system"

export interface PrivateRouteContainerProps {
  children: React.ReactNode
}
const PrivateRouteContainer: React.FC<PrivateRouteContainerProps> = ({ children }) => {
  const user = useAppSelector(getSystemUser);
  const navigate = useNavigate();
  useEffect(() => {
    if(!user) navigate(renderPageUrl('SIGN_IN'));
  }, [user]);
  return <>
    {children}
  </>
}

export default PrivateRouteContainer
