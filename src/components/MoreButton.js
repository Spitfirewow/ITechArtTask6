import React from 'react';
import { func } from 'prop-types';

export default function MoreButton({ callback }) {
  return (
    <div className="button-wrapper">
      <button
        type="button"
        className="more-btn"
        id="more-btn"
        onClick={callback}
      >
        <i className="fas fa-ellipsis-h" />
      </button>
    </div>
  );
}

MoreButton.propTypes = {
  callback: func.isRequired,
};
