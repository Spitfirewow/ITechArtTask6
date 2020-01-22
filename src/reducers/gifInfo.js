const gifInfo = (state = { gifInfo: {}, didLoad: false }, action) => {
  switch (action.type) {
    case 'SET_GIF_INFO':
      return { ...state, gifInfo: action.gifInfo };
    case 'TOGGLE_GIF_INFO_LOAD':
      return { ...state, didLoad: action.didLoad };
    default:
      return state;
  }
};

export default gifInfo;
