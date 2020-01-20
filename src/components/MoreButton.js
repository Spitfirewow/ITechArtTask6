import React from 'react';
import { func } from 'prop-types';

export default function MoreButton({ onClick }) {
  return (
    <div className="button-wrapper">
      <button
        type="button"
        className="more-btn"
        id="more-btn"
        onClick={onClick}
      >
        <i className="fas fa-ellipsis-h" />
      </button>
    </div>
  );
}

MoreButton.propTypes = {
  onClick: func.isRequired,
};
