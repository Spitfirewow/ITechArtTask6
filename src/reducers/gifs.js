const gifs = (state = { gifs: [], didLoad: false }, action) => {
  switch (action.type) {
    case 'SET_GIFS':
      return { ...state, gifs: action.gifs };
    case 'TOGGLE_GIFS_LOAD':
      return { ...state, didLoad: action.didLoad };
    default:
      return state;
  }
};

export default gifs;
