import './App.scss'
import 'react-toastify/dist/ReactToastify.css';

import { routes } from './routes'
import { Routes, Route } from 'react-router-dom';
import useHistory from '~hooks/useHistory';
import PrivateRouteContainer from '~containers/PrivateRouteContainer';
import { useQuery } from '@tanstack/react-query';
import { getUserInfoService } from '~services/auth';
import { useAppDispatch, useAppSelector } from './store';
import { addUser, getSystemToken, signOut } from './store/system';
import Loading from '~atoms/Loading';
import { ToastContainer } from 'react-toastify';

function App() {
  const dispatch = useAppDispatch();
  const token = useAppSelector(getSystemToken);
  useHistory();

  const {isLoading} = useQuery({  
    queryKey: ['app-get-user'], 
    queryFn: getUserInfoService,
    onSuccess: (data) => {
      dispatch(addUser({
        email: data.email ?? '',
        fullName: data.fullname ?? '',
        username: data.username ?? '',
      }));
    },
    onError:() => {
      dispatch(signOut());
    },
    enabled: Boolean(token)
  });

  if(isLoading && Boolean(token)) 
    return <Loading size='full' modifiers='main'/>

  return (
    <>
      <Routes>
        {routes.map((route, idx) => (
          <Route
            key={`route-${idx}`}
            path={route.path}
            element={route.isPrivate ? <PrivateRouteContainer>{route.element}</PrivateRouteContainer>: route.element} 
          />
        ))}
      </Routes>
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
    </>
  )
}

export default App
