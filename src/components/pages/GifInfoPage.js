import React from 'react';
import {
  useParams,
} from 'react-router-dom';

import GifInfoContainer from '../GifInfoContainer';
import useGifInfo from '../hooks/useGifInfo';
import APIManager from '../APIManager';

export default function GifInfoPage() {
  const apiManager = new APIManager();

  const { id } = useParams();

  const { didLoad, gifInfo } = useGifInfo(apiManager, id);

  if (didLoad) {
    return (
      <GifInfoContainer gifInfo={gifInfo} />
    );
  }

  return (
    <div />
  );
}
