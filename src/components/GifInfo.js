import React from 'react';
import {
  string, shape, func,
} from 'prop-types';

import BackButton from './BackButton';
import Picture from './Picture';

export default function GifInfo({
  data, onBackButtonClick,
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
      <BackButton onClick={onBackButtonClick} />
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
  onBackButtonClick: func.isRequired,
};
