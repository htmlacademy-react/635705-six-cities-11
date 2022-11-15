import { useState } from 'react';
import PlacesOption from '../places-option/places-option';
import { TypeOffersSort } from '../../const';

function PlacesSorting(): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<string>(TypeOffersSort[0]);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {TypeOffersSort.map((option) => (
          <PlacesOption
            key={option}
            isActive={selectedOption === option}
            text={option}
            setSelectedOption={setSelectedOption}
          />
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
