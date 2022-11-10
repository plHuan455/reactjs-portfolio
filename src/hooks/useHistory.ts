import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../store";
import { addHistory } from "../store/system";

const useHistory = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(addHistory(pathname));
  }, [pathname, dispatch])
}

export default useHistory;