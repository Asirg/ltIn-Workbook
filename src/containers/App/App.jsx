import { 
  BrowserRouter,
  Route, 
  Routes,
  Outlet,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import routesConfig from '@routes/routesConfig';

import styles from './App.module.css';

const nestedRoutes = (routes) => (
    <>
      { routes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          element={route.element}
        >
          { route.routes && (
              <>
                <Route index element={route.indexElemet}/>
                {nestedRoutes(route.routes)}
              </>
          )}
        </Route>
      ))}
    </>
  )

const App = () => {
  return (
    <>
      <BrowserRouter basename='/ltIn-Workbook'>
        <Routes>
          {nestedRoutes(routesConfig)}
        </Routes>
      </BrowserRouter>
    </>
      
  )
}

App.propTypes = {
  prop: PropTypes.string
}


export default App;
