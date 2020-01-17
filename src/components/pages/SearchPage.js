import React from 'react';
import PropTypes, { func, array } from 'prop-types';
import SearchBar from '../SearchBar';
import useSearchBar from '../hooks/useSearchBar';
import GifsContainer from '../GifsContainer';
import useSearch from '../hooks/useSearch';
import MoreButton from '../MoreButton';

export default function SearchPage({ apiManager }) {
  const {
    didLoad, text, gifs, onMoreButtonClick,
  } = useSearch(apiManager);

  const {
    value, handleChange, buttonState, onButtonClick, onKeyDown,
  } = useSearchBar(text, false);

  if (didLoad) {
    return (
      <>
        <SearchBar
          value={value}
          handleChange={handleChange}
          buttonState={buttonState}
          onButtonClick={onButtonClick}
          onKeyDown={onKeyDown}
        />
        <GifsContainer gifs={gifs} />
        <MoreButton callback={onMoreButtonClick} />
      </>
    );
  }

  return (
    <div />
  );
}

SearchPage.propTypes = {
  apiManager: PropTypes.shape({
    setRequest: func,
    load: func,
    eraseGifs: func,
    currentGifs: array,
  }).isRequired,
};
