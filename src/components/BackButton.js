import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function BackButton() {
  const history = useHistory();
  const location = useLocation();

  function onButtonClick() {
    if (history.length === 1) {
      history.replace('/');
      history.push(location);
    }
    history.goBack();
  }

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
