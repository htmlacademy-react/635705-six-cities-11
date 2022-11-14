import { MouseEvent } from 'react';

type PlacesOptionProps = {
  text: string;
  isActive: boolean;
  setSelectedOption: (option: string) => void;
}

function PlacesOption({ text, isActive, setSelectedOption }: PlacesOptionProps): JSX.Element {
  return (
    <li className={`places__option ${isActive ? 'places__option--active' : ''}`} tabIndex={0}
      onClick={(evt: MouseEvent<HTMLElement>) => {
        evt.preventDefault();
        setSelectedOption(text);
      }}
    >
      {text}
    </li>
  );
}

export default PlacesOption;
