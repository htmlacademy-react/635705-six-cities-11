import { useState, useRef } from 'react';
import PlacesOption from '../places-option/places-option';
import { TypeOffersSort } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortType } from '../../store/action';
import { useOnClickOutside } from 'usehooks-ts';

function PlacesSorting(): JSX.Element {
  const ref = useRef(null);
  const dispatch = useAppDispatch();

  const [isOptionsOpen, setOptionsView] = useState<boolean>(false);
  const currentSortType = useAppSelector((state) => state.sortType);

  const closeOptions = () => {
    if (isOptionsOpen) {
      setOptionsView(false);
    }
  };

  const handleSortingClick = (sortType: TypeOffersSort) => {
    dispatch(changeSortType({ sortType }));
    closeOptions();
  };

  const handleOptionsClick = () => {
    if (!isOptionsOpen) {
      setOptionsView(true);
      return;
    }
    closeOptions();
  };

  useOnClickOutside(ref, closeOptions);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => { handleOptionsClick(); }}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOptionsOpen ? 'places__options--opened' : ''}`} ref={ref}>
        {Object.values(TypeOffersSort).map((option) => (
          <PlacesOption
            key={option}
            isActive={currentSortType === option}
            text={option}
            handleSortingClick={handleSortingClick}
          />
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
