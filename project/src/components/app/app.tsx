import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { AppRoute } from '../../const';

type AppProps = {
  rentalsNum: number;
}

function App({ rentalsNum }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage rentalsNum={rentalsNum} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage />}
        />
        <Route path={AppRoute.Room}>
          <Route
            path=':id'
            element={<OfferPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
