import { connect } from 'react-redux';

import { setSearchBarValue } from '../actions';
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state) => {
  const { value } = state.searchBar;
  return {
    value,
    buttonState: value === '',
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleChange: (e) => {
    const { value } = e.target;
    dispatch(setSearchBarValue(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
