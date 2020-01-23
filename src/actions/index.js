export const gifInfoLoaded = () => ({
  type: 'GIF_INFO_LOADED',
});

export const gifsLoaded = () => ({
  type: 'GIFS_LOADED',
});

export const setGifInfo = (payload) => ({
  type: 'SET_GIF_INFO',
  payload,
});

export const setGifs = (payload) => ({
  type: 'SET_GIFS',
  payload,
});

export const setSearchBarValue = (payload) => ({
  type: 'SET_SEARCH_BAR_VALUE',
  payload,
});
