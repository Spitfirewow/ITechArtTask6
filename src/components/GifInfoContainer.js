import React from 'react';
import { node } from 'prop-types';

export default function GifInfoContainer({ gifInfo }) {
  return (
    <div className="gifs-container" id="gif-info-container">
      {gifInfo}
    </div>
  );
}

GifInfoContainer.propTypes = {
  gifInfo: node.isRequired,
};
