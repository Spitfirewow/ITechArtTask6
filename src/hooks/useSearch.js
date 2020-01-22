import { useEffect } from 'react';
import {
  useLocation,
} from 'react-router-dom';

const searchOffset = 3;

export default function useSearch(onPageLoad) {
  const search = encodeURIComponent(useLocation().search.slice(searchOffset));
  const urlParams = new URLSearchParams(`?q=${search}`);
  const text = decodeURIComponent(urlParams.get('q'));

  useEffect(
    () => {
      onPageLoad(text);
    }, [text],
  );

  return {
    text,
  };
}
