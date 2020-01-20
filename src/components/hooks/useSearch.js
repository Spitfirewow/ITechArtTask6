import React, { useState, useEffect } from 'react';
import {
  useLocation,
} from 'react-router-dom';

import Gif from '../Gif';

const searchOffset = 3;

export default function useSearch(apiManager) {
  const search = encodeURIComponent(useLocation().search.slice(searchOffset));
  const urlParams = new URLSearchParams(`?q=${search}`);
  const [didLoad, setLoad] = useState(false);
  const [gifs, setGifs] = useState(null);
  const text = decodeURIComponent(urlParams.get('q'));

  function getGif(gifData) {
    return (
      <li key={gifData.id}>
        <Gif
          image={gifData.smallImage}
          id={gifData.id}
        />
      </li>
    );
  }

  async function loadGifs() {
    await apiManager.load(text);
    setGifs(
      apiManager.currentGifs.map(getGif),
    );
    setLoad(true);
  }

  useEffect(
    () => {
      apiManager.eraseGifs();
      loadGifs();
    }, [text],
  );

  function onMoreButtonClick() {
    loadGifs();
  }
  return {
    didLoad, text, gifs, onMoreButtonClick,
  };
}
