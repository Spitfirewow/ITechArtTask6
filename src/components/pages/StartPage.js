import React from 'react';

import SearchBar from '../../containers/SearchBarContainer';
import useSearchBar from '../../hooks/useSearchBar';

export default function StartPage() {
  const searchBarProps = useSearchBar('', true);
  return (
    <SearchBar
      {...searchBarProps}
    />
  );
}
