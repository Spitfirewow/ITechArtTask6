import React from 'react';
import {
  string, shape,
} from 'prop-types';
import {
  Link,
} from 'react-router-dom';

export default function Gif({
  image, id,
}) {
  const link = `/gif/${id}`;
  return (
    <Link to={link}>
      <div
        className="gif-picture"
        style={{
          backgroundImage: `url(${image.url})`,
          width: `${image.width}px`,
          height: `${image.height}px`,
        }}
        key={id}
      />
    </Link>
  );
}

Gif.propTypes = {
  image: shape(
    {
      url: string,
      width: string,
      height: string,
    },
  ).isRequired,
  id: string.isRequired,
};
