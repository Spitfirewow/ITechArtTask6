import React from 'react';
import {
  string, shape,
} from 'prop-types';
import {
  Link,
} from 'react-router-dom';

import Picture from './Picture';

export default function Gif({
  image, id,
}) {
  const link = `/gif/${id}`;
  return (
    <Link to={link}>
      <Picture
        url={image.url}
        width={image.width}
        height={image.height}
        id={id}
      />
    </Link>
  );
}

Gif.propTypes = {
  image: shape({
    url: string,
    width: string,
    height: string,
  }).isRequired,
  id: string.isRequired,
};
