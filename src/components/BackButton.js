import React from 'react';
import { func } from 'prop-types';

export default function BackButton({ onButtonClick }) {
  return (
    <div className="button-wrapper">
      <button
        className="back-btn"
        type="button"
        id="back-btn"
        onClick={onButtonClick}
      >
        Back to search
      </button>
    </div>
  );
}

BackButton.propTypes = {
  onButtonClick: func.isRequired,
};
