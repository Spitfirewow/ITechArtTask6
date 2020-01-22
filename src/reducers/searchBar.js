const searchBar = (state = { value: '', buttonState: true }, action) => {
  switch (action.type) {
    case 'SET_SEARCH_BAR_VALUE':
      return { ...state, value: action.value };
    case 'SET_SEARCH_BUTTON_STATE':
      return { ...state, buttonState: action.isDisabled };
    default:
      return state;
  }
};

export default searchBar;
