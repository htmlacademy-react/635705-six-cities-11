import { memo } from 'react';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserData } from '../../services/user-data';
import Logo from '../logo/logo';
import { getOffers } from '../../store/offers-data/selectors';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = getUserData();

  const offers = useAppSelector(getOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = () => authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type={'header'} width={81} height={41} />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuth() ? AppRoute.Favorites : AppRoute.Login}>
                  <div className="header__avatar-wrapper user__avatar-wrapper" style={{ backgroundImage: `url(${userData.avatarUrl})` }}></div>
                  {
                    isAuth() ?
                      <>
                        <span className="header__user-name user__name">{userData.name}</span>
                        <span className="header__favorite-count">{offers.filter((offer) => offer.isFavorite).length}</span>
                      </> :
                      <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
              {
                isAuth() ?
                  <li className="header__nav-item">
                    <Link className="header__nav-link" onClick={() => { dispatch(logoutAction()); }} to={AppRoute.Main}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li> : ''
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
