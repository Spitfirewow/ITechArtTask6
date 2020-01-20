import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import GifInfo from '../GifInfo';

export default function useGifInfo(apiManager, id) {
  const [didLoad, setLoad] = useState(false);
  const [gifInfo, setGifInfo] = useState(null);
  const history = useHistory();
  const location = useLocation();

  function onButtonClick() {
    if (history.length === 1) {
      history.replace('/');
      history.push(location);
    }
    history.goBack();
  }

  async function loadGifInfo(){
    await apiManager.loadById(id);
    const data = apiManager.gifInfo;
    setGifInfo(<GifInfo
      data={data}
      onBackButtonClick={onButtonClick}
    />);
    setLoad(true);
  }

  useEffect(
    () => {
      loadGifInfo();
    }, [id],
  );

  return { didLoad, gifInfo };
}
