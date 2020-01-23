import React from 'react';
import {
  useParams,
} from 'react-router-dom';

import {
  bool, shape, string, func,
} from 'prop-types';
import GifInfoWrapper from '../GifInfoWrapper';
import useGifInfo from '../../hooks/useGifInfo';

export default function GifInfoPage({ didLoad, gifInfo, onPageLoad }) {
  const { id } = useParams();

  useGifInfo(id, onPageLoad);

  if (didLoad) {
    return (
      <GifInfoWrapper gifInfoNode={gifInfo} />
    );
  }

  return (
    <div />
  );
}

GifInfoPage.propTypes = {
  didLoad: bool.isRequired,
  gifInfo: shape({
    title: string,
    avatarURL: string,
    time: string,
    username: string,
    fullImage: shape({
      url: string,
    }),
  }).isRequired,
  onPageLoad: func.isRequired,
};
