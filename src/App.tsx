import './App.scss'
import { routes } from './routes'
import { Routes, Route } from 'react-router-dom';
import useHistory from '~hooks/useHistory';
import PrivateRouteContainer from '~containers/PrivateRouteContainer';
function App() {
  useHistory();
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
