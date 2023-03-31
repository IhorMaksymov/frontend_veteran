import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { GlobalStyle } from './GlobalStyle';

import Layout from './Layout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ClietsPage = lazy(() => import('../pages/ClientsPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage /> } />
          <Route path='/signup'
            element={
              <RestrictedRoute redirectTo='/clients' component={<RegisterPage />} />
            } />
          <Route path='/login'
            element={
              <RestrictedRoute redirectTo='/clients' component={<LoginPage />} />
            } />
          <Route path='/clients' element={
            <PrivateRoute redirectTo='/login' component={<ClietsPage />} />
          } />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
