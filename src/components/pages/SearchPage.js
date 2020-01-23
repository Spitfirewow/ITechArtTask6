import React, { useCallback } from 'react';
import {
  func, bool, node,
} from 'prop-types';

import SearchBar from '../../containers/SearchBarContainer';
import useSearchBar from '../../hooks/useSearchBar';
import GifsWrapper from '../GifsWrapper';
import useSearch from '../../hooks/useSearch';
import MoreButton from '../MoreButton';

export default function SearchPage({
  onPageLoad, didLoad, gifs, onMoreButtonClick,
}) {
  const {
    text,
  } = useSearch(onPageLoad);

  const searchBarProps = useSearchBar(text, false);
  const buttonCallback = useCallback(() => { onMoreButtonClick(text); }, [text]);

  if (didLoad) {
    return (
      <>
        <SearchBar
          {...searchBarProps}
        />
        <GifsWrapper>
          {gifs}
        </GifsWrapper>
        <MoreButton onClick={buttonCallback} />
      </>
    );
  }

  return (
    <div />
  );
}

SearchPage.propTypes = {
  onMoreButtonClick: func.isRequired,
  gifs: node.isRequired,
  didLoad: bool.isRequired,
  onPageLoad: func.isRequired,
};
