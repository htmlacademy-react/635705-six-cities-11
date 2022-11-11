import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorization: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({ authorization, children }: PrivateRouteProps): JSX.Element {
  return authorization === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
