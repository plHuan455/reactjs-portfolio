import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { renderPageUrl } from "../../navigation";
import { useAppDispatch, useAppSelector } from "../../store"
import { getSystemUser, popHistory } from "../../store/system"

export interface PrivateRouteContainerProps {
  children: React.ReactNode
}
const PrivateRouteContainer: React.FC<PrivateRouteContainerProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getSystemUser);
  const navigate = useNavigate();
  useEffect(() => {
    if(!user) {
      dispatch(popHistory());
      navigate(renderPageUrl('SIGN_IN'))
    };
  }, [user, dispatch]); 
  return <>
    {children}
  </>
}

export default PrivateRouteContainer
