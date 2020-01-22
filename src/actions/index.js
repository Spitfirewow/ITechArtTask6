export const toggleGifInfoLoad = (didLoad) => ({
  type: 'TOGGLE_GIF_INFO_LOAD',
  didLoad,
});

export const toggleGifsLoad = (didLoad) => ({
  type: 'TOGGLE_GIFS_LOAD',
  didLoad,
});

export const setGifInfo = (gifInfo) => ({
  type: 'SET_GIF_INFO',
  gifInfo,
});

export const setGifs = (gifs) => ({
  type: 'SET_GIFS',
  gifs,
});

export const setSearchBarValue = (value) => ({
  type: 'SET_SEARCH_BAR_VALUE',
  value,
});

export const setSearchButtonState = (isDisabled) => ({
  type: 'SET_SEARCH_BUTTON_STATE',
  isDisabled,
});
