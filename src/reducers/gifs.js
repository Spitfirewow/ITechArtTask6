const gifs = (state = { gifs: [], didLoad: false }, action) => {
  switch (action.type) {
    case 'SET_GIFS':
      return { ...state, gifs: Object.assign(action.payload) };
    case 'GIFS_LOADED':
      return { ...state, didLoad: true };
    default:
      return state;
  }
};

export default gifs;
