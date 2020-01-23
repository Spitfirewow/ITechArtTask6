import React from 'react';
import { node } from 'prop-types';

export default function GifsWrapper({ children }) {
  return (
    <div className="gifs-container" id="gifs-container">
      <div className="gif-wrapper">
        <div className="gifs">
          {children}
        </div>
      </div>
    </div>
  );
}

GifsWrapper.propTypes = {
  children: node.isRequired,
};
