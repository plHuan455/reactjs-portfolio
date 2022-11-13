import { useNavigate } from "react-router-dom";
import { renderPageUrl } from "../navigation";
import { useAppSelector } from "../store";
import { getSystemHistory } from "../store/system";

const useNavigateBack = () => {
  const history = useAppSelector(getSystemHistory);
  const navigate = useNavigate();

  const navigateBack = () => {
    if(history.length < 2) {
      navigate(renderPageUrl('HOME'));
      return;
    }
    navigate(history[0]);
  }

  return navigateBack;
}

export default useNavigateBack;