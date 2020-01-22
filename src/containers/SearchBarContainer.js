import { connect } from 'react-redux';

import { setSearchBarValue, setSearchButtonState } from '../actions';
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state) => ({
  value: state.searchBar.value,
  buttonState: state.searchBar.buttonState,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (e) => {
    const { value } = e.target;
    dispatch(setSearchBarValue(value));
    dispatch(setSearchButtonState(value === ''));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
