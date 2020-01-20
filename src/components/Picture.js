import React from 'react';
import { string } from 'prop-types';

export default function Picture({
  url, width, height, id,
}) {
  return (
    <div
      className="gif-picture"
      style={{
        backgroundImage: `url(${url})`,
        width: `${width}px`,
        height: `${height}px`,
      }}
      key={id}
    />
  );
}

Picture.propTypes = {
  url: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
  id: string,
};

Picture.defaultProps = {
  id: '',
};
