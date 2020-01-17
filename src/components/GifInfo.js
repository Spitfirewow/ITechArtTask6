import React from 'react';
import {
  string, shape, func,
} from 'prop-types';
import BackButton from './BackButton';

export default function GifInfo({
  data, callback,
}) {
  return (
    <div className="gif-info-wrapper">
      <div
        className="gif-picture"
        style={{
          backgroundImage: `url(${data.fullImage.url})`,
          width: `${data.fullImage.width}px`,
          height: `${data.fullImage.height}px`,
        }}
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
      <BackButton callback={callback} />
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
  callback: func.isRequired,
};
