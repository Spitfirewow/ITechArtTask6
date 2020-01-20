import React from 'react';
import { string, func } from 'prop-types';

export default function SearchInput({ text, onChange, onKeyDown }) {
  return (
    <input
      className="search-input"
      name="search-input"
      type="text"
      id="search-input"
      value={text}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

SearchInput.propTypes = {
  text: string.isRequired,
  onChange: func.isRequired,
  onKeyDown: func.isRequired,
};
