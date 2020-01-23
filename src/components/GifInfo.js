import React from 'react';
import {
  string, shape,
} from 'prop-types';

import BackButton from '../containers/BackButtonContainer';
import Picture from './Picture';

export default function GifInfo({
  data,
}) {
  return (
    <div className="gif-info-wrapper">
      <Picture
        url={data.fullImage.url}
        width={data.fullImage.width}
        height={data.fullImage.height}
      />
      <div className="gif-name">
        Name:
        {data.title}
      </div>
      <div className="gif-date">
        Date:
        {data.time}
      </div>
      <div className="gif-author-name">
        Author:
        {data.username}
      </div>
      <div
        className="gif-author-picture"
        style={{
          backgroundImage: `url(${data.avatarUrl})`,
        }}
      />
      <BackButton />
    </div>
  );
}

GifInfo.propTypes = {
  data: shape({
    title: string,
    avatarURL: string,
    time: string,
    username: string,
    fullImage: shape({
      url: string,
    }),
  }).isRequired,
};
