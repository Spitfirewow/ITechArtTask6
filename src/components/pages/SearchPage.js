import React from 'react';

import SearchBar from '../SearchBar';
import useSearchBar from '../hooks/useSearchBar';
import GifsContainer from '../GifsContainer';
import useSearch from '../hooks/useSearch';
import MoreButton from '../MoreButton';
import apiManager from '../APIManager';

export default function SearchPage() {
  const {
    didLoad, text, gifs, onMoreButtonClick,
  } = useSearch(apiManager);

  const searchBarProps = useSearchBar(text, false);

  if (didLoad) {
    return (
      <>
        <SearchBar
          {...searchBarProps}
        />
        <GifsContainer gifs={gifs} />
        <MoreButton onClick={onMoreButtonClick} />
      </>
    );
  }

  return (
    <div />
  );
}
