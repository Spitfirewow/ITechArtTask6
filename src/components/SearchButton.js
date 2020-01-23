import React from 'react';
import { bool, func } from 'prop-types';

export default function SearchButton({ disabled, onClick }) {
  return (
    <button
      type="button"
      className="search-btn"
      id="search-btn"
      disabled={disabled}
      onClick={onClick}
    >
      Search
    </button>
  );
}

SearchButton.propTypes = {
  disabled: bool.isRequired,
  onClick: func.isRequired,
};
