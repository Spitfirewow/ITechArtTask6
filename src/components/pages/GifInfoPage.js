import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import { shape, func } from 'prop-types';
import GifInfoContainer from '../GifInfoContainer';
import useGifInfo from '../hooks/useGifInfo';

export default function GifInfoPage({ apiManager }) {
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

GifInfoPage.propTypes = {
  apiManager: shape({
    loadById: func,
  }).isRequired,
};
