import { MouseEvent } from 'react';
import { TypeOffersSort } from '../../const';

type PlacesOptionProps = {
  text: string;
  isActive: boolean;
  handleSortingClick: (option: TypeOffersSort) => void;
}

function PlacesOption({ text, isActive, handleSortingClick }: PlacesOptionProps): JSX.Element {
  return (
    <li
      className={`places__option ${isActive ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={(evt: MouseEvent<HTMLElement>) => {
        evt.preventDefault();
        handleSortingClick(text as TypeOffersSort);
      }}
    >
      {text}
    </li>
  );
}

export default PlacesOption;
