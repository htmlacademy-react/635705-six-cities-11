import { memo } from 'react';
import { CityType } from '../../const';
import CityItem from '../city-item/city-item';

type TabsProps = {
  selectedCity: string;
  setCity: (city: string) => void;
}

function Tabs({ selectedCity, setCity }: TabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Array.from(Object.values(CityType)).map((city) => <CityItem key={city} city={city} selectedCity={selectedCity} setCity={setCity} />)}
        </ul>
      </section>
    </div>
  );
}

export default memo(Tabs);
