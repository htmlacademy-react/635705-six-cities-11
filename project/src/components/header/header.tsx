import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus, AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { logoutAction } from '../../store/api-actions';
import { SyntheticEvent } from 'react';
import { getAuthInfo, getAuthorizationStatus } from '../../store/user-process/selectors';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const authInfo = useAppSelector(getAuthInfo);

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
                <Link className="header__nav-link header__nav-link--profile" to={authorizationStatus === AuthorizationStatus.Auth ? AppRoute.Favorites : AppRoute.Login}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {authorizationStatus === AuthorizationStatus.Auth
                    ? (
                      <>
                        <span className="header__user-name user__name">{authInfo?.email}</span>
                        <span className="header__favorite-count">3</span>
                      </>
                    )
                    : (<span className="header__login">Sign in</span>)}
                </Link>
              </li>
              {authorizationStatus === AuthorizationStatus.Auth && (
                <li className="header__nav-item">
                  <Link className="header__nav-link"
                    to={AppRoute.Login}
                    onClick={(evt: SyntheticEvent<HTMLElement>) => {
                      evt.preventDefault();
                      dispatch(logoutAction());
                    }}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
