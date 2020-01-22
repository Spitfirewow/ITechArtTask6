import React from 'react';
import { connect } from 'react-redux';

import { setGifInfo, toggleGifInfoLoad } from '../actions';
import GifInfoPage from '../components/pages/GifInfoPage';
import apiManager from '../components/APIManager';
import GifInfo from '../components/GifInfo';

async function loadGifInfo(id, dispatch) {
  await apiManager.loadById(id);
  const data = apiManager.gifInfo;
  dispatch(setGifInfo(<GifInfo
    data={data}
  />));
  dispatch(toggleGifInfoLoad(true));
}

const mapStateToProps = (state) => ({
  didLoad: state.gifInfo.didLoad,
  gifInfo: state.gifInfo.gifInfo,
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
