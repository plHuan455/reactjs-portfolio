import './App.scss'
import 'react-toastify/dist/ReactToastify.css';

import { routes } from './routes'
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes>
        {routes.map((route, idx) => (
          <Route
            key={`route-${idx}`}
            path={route.path}
            element={route.element} 
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
