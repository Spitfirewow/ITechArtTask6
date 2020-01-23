const searchBar = (state = { value: '' }, action) => {
  switch (action.type) {
    case 'SET_SEARCH_BAR_VALUE':
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export default searchBar;
