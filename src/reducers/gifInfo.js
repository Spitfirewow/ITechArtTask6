const gifInfo = (state = { gifInfo: {}, didLoad: false }, action) => {
  switch (action.type) {
    case 'SET_GIF_INFO':
      return { ...state, gifInfo: Object.assign(action.payload) };
    case 'GIF_INFO_LOADED':
      return { ...state, didLoad: true };
    default:
      return state;
  }
};

export default gifInfo;
