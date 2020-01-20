import React from 'react';

import SearchBar from '../SearchBar';
import useSearchBar from '../hooks/useSearchBar';

export default function StartPage() {
  const {
    value, handleChange, buttonState, onButtonClick, onKeyDown,
  } = useSearchBar('', true);
  return (
    <SearchBar
      value={value}
      handleChange={handleChange}
      buttonState={buttonState}
      onButtonClick={onButtonClick}
      onKeyDown={onKeyDown}
    />
  );
}
