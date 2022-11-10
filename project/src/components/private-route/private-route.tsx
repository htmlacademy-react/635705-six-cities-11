import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  isAuthorized: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({ isAuthorized, children }: PrivateRouteProps): JSX.Element {
  return isAuthorized === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
