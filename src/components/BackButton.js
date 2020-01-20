import React from 'react';
import { func } from 'prop-types';

export default function BackButton({ onClick }) {
  return (
    <div className="button-wrapper">
      <button
        className="back-btn"
        type="button"
        id="back-btn"
        onClick={onClick}
      >
        Back to search
      </button>
    </div>
  );
}

BackButton.propTypes = {
  onClick: func.isRequired,
};
