import React from 'react';
import { string, func } from 'prop-types';

export default function SearchInput({ text, callback, onKeyDown }) {
  return (
    <input
      className="search-input"
      name="search-input"
      type="text"
      id="search-input"
      value={text}
      onChange={callback}
      onKeyDown={onKeyDown}
    />
  );
}

SearchInput.propTypes = {
  text: string.isRequired,
  callback: func.isRequired,
  onKeyDown: func.isRequired,
};
