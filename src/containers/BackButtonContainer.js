import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import BackButton from '../components/BackButton';

export default function BackButtonContainer() {
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
    <BackButton onButtonClick={onButtonClick} />
  );
}
