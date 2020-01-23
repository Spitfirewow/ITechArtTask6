import React from 'react';
import { connect } from 'react-redux';

import { setGifInfo, gifInfoLoaded } from '../actions';
import GifInfoPage from '../components/pages/GifInfoPage';
import apiManager from '../components/APIManager';
import GifInfo from '../components/GifInfo';

async function loadGifInfo(id, dispatch) {
  const data = await apiManager.loadById(id);
  dispatch(setGifInfo(
    data,
  ));
  dispatch(gifInfoLoaded());
}

const mapStateToProps = (state) => ({
  didLoad: state.gifInfo.didLoad,
  gifInfo: <GifInfo data={state.gifInfo.gifInfo} />,
});

const mapDispatchToProps = (dispatch) => ({
  onPageLoad: (id) => {
    loadGifInfo(id, dispatch);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GifInfoPage);
