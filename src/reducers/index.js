import { combineReducers } from 'redux';

import gifInfo from './gifInfo';
import gifs from './gifs';
import searchBar from './searchBar';

export default combineReducers({
  gifInfo,
  gifs,
  searchBar,
});
