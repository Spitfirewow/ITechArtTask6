import React from 'react';
import { bool, func } from 'prop-types';

export default function SearchButton(props) {
  const { disabled } = props;
  const { callback } = props;
  return (
    <button type="button" className="search-btn" id="search-btn" disabled={disabled} onClick={callback}>Search</button>
  );
}

SearchButton.propTypes = {
  disabled: bool.isRequired,
  callback: func.isRequired,
};
