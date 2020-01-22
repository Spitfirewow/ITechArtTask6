import React from 'react';
import { node } from 'prop-types';

export default function GifsContainer(props) {
  const { gifs } = props;
  return (
    <div className="gifs-container" id="gifs-container">
      <div className="gif-wrapper">
        <div className="gifs">
          {gifs}
        </div>
      </div>
    </div>
  );
}

GifsContainer.propTypes = {
  gifs: node.isRequired,
};
