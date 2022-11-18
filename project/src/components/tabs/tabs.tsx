import { Link } from 'react-router-dom';
import { CITIES, AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

type CitiesProps = {
  currentCity: string;
};

function Tabs({ currentCity }: CitiesProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityClick = (city: string) => {
    dispatch(changeCity({ city }));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => {
            const activeClass = city === currentCity ? 'tabs__item--active' : '';

            return (
              <li className="locations__item" key={city}>
                <Link
                  className={`locations__item-link tabs__item ${activeClass}`}
                  to={AppRoute.Main}
                  onClick={() => handleCityClick(city)}
                >
                  <span>{city}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
