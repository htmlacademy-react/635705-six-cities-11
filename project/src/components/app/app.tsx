import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import ErrorScreen from '../../pages/error-screen/error-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus, getAuthCheckedStatus } from '../../store/user-process/selectors';
import { getOffersDataLoadingStatus, getErrorStatus } from '../../store/offers-data/selectors';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const hasError = useAppSelector(getErrorStatus);

  if (!isAuthChecked || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (hasError) {
    return (
      <ErrorScreen />);
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
              pageType={AppRoute.Login}
            >
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
              pageType={AppRoute.Favorites}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Room}>
          <Route
            path=':id'
            element={<OfferPage />}
          />
        </Route>
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
