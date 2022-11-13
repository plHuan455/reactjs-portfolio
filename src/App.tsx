import './App.scss'
import { routes } from './routes'
import { Routes, Route } from 'react-router-dom';
import useHistory from '~hooks/useHistory';
import PrivateRouteContainer from '~containers/PrivateRouteContainer';
import { useQuery } from '@tanstack/react-query';
import { getUserInfoService } from '~services/auth';
import { useAppDispatch, useAppSelector } from './store';
import { addUser, getSystemToken, signOut } from './store/system';
import Loading from '~atoms/Loading';
function App() {
  const dispatch = useAppDispatch();
  const token = useAppSelector(getSystemToken);
  useHistory();
  const {isLoading} = useQuery({  
    queryKey: ['get-user-info'], 
    queryFn: getUserInfoService,
    onSuccess: (data) => {
      dispatch(addUser(data));
    },
    onError:() => {
      dispatch(signOut());
    },
    enabled: Boolean(token)
  });

  if(isLoading && Boolean(token)) 
    return <Loading size='full' modifiers='main'/>

  return (
    <Routes>
      {routes.map((route, idx) => (
        <Route
          key={`route-${idx}`}
          path={route.path}
          element={route.isPrivate ? <PrivateRouteContainer>{route.element}</PrivateRouteContainer>: route.element} 
        />
      ))}
    </Routes>
  )
}

export default App
