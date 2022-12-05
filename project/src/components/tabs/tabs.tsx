import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { CITIES, AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/offers-data/offers-data';
import { resetSort } from '../../store/sort-process/sort-process';

type TabsProps = {
  cityName: string;
}

function Tabs({ cityName }: TabsProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityClick = (evt: SyntheticEvent<HTMLElement>) => {
    evt.preventDefault();
    const currentCity: string = evt.currentTarget.innerText;
    dispatch(changeCity({ currentCity }));
    dispatch(resetSort());
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => {
            const activeClass = city === cityName ? 'tabs__item--active' : '';

            return (
              <li className="locations__item" key={city}>
                <Link
                  className={`locations__item-link tabs__item ${activeClass}`}
                  to={AppRoute.Main}
                  onClick={handleCityClick}
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
