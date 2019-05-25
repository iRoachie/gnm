import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Redirect, RouteComponentProps } from '@reach/router';

interface ProtectedRouteProps extends RouteComponentProps {
  component: React.FunctionComponent;
}

const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useContext(AuthContext);

  return user ? (
    <Component {...rest} />
  ) : (
    <Redirect from={rest.path} to="/login" noThrow />
  );
};

export default ProtectedRoute;
