import { useAppSelector } from '../../hooks';
import { AuthorizationStatus, AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

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
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">3</span>
                      </>
                    )
                    : (<span className="header__login">Sign in</span>)}
                </Link>
              </li>
              {authorizationStatus === AuthorizationStatus.Auth && (
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
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
