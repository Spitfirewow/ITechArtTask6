import React from 'react';
import { bool, string, func } from 'prop-types';

import SearchInput from './SearchInput';
import SearchButton from './SearchButton';


export default function SearchBar({
  value,
  handleChange,
  buttonState,
  onButtonClick,
  onKeyDown,
}) {
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <SearchInput
          text={value}
          onChange={handleChange}
          onKeyDown={(e) => onKeyDown(e, value)}
        />
        <SearchButton
          disabled={buttonState}
          onClick={() => onButtonClick(value)}
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
  onKeyDown: func.isRequired,
  buttonState: bool.isRequired,
  onButtonClick: func.isRequired,
};
