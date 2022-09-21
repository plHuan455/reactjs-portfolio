import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store'
import { routes } from './routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map(route => <Route path={route.path} element={route.element} />)}
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
