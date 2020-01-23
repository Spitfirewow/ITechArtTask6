import React from 'react';
import { node } from 'prop-types';

export default function GifInfoWrapper({ gifInfoNode }) {
  return (
    <div className="gifs-container" id="gif-info-container">
      {gifInfoNode}
    </div>
  );
}

GifInfoWrapper.propTypes = {
  gifInfoNode: node.isRequired,
};
