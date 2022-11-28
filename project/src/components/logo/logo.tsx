import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  type: string;
  width: number;
  height: number;
};

function Logo({ type, width, height }: LogoProps): JSX.Element {

  return (
    <Link className={`${type}__logo-link ${document.location.pathname === AppRoute.Main && type === 'header' ? 'header__logo-link--active' : ''}`} to={AppRoute.Main}>
      <img className={`${type}__logo`} src="img/logo.svg" alt="6 cities logo" width={width} height={height} />
    </Link>
  );
}

export default Logo;
