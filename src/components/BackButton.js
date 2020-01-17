import React from 'react';
import { func } from 'prop-types';

export default function BackButton({ callback }) {
  return (
    <div className="button-wrapper">
      <button className="back-btn" type="button" id="back-btn" onClick={callback}>Back to search</button>
    </div>
  );
}

BackButton.propTypes = {
  callback: func.isRequired,
};
