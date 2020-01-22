import React from 'react';
import { connect } from 'react-redux';

import { setSearchBarValue, setGifs, toggleGifsLoad } from '../actions';
import SearchPage from '../components/pages/SearchPage';
import apiManager from '../components/APIManager';
import Gif from '../components/Gif';

function getGif(gifData) {
  return (
    <li key={gifData.id}>
      <Gif
        image={gifData.smallImage}
        id={gifData.id}
      />
    </li>
  );
}

async function loadGifs(value, dispatch) {
  await apiManager.load(value);
  dispatch(setGifs(apiManager.currentGifs.map(getGif)));
  dispatch(toggleGifsLoad(true));
}

const mapStateToProps = (state) => ({
  didLoad: state.gifs.didLoad,
  gifs: state.gifs.gifs,
});

const mapDispatchToProps = (dispatch) => ({
  onPageLoad: (value) => {
    dispatch(setSearchBarValue(value));
    apiManager.eraseGifs();
    loadGifs(value, dispatch);
  },
  onMoreButtonClick: (value) => {
    loadGifs(value, dispatch);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);
