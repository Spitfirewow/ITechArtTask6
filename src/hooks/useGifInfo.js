import { useEffect } from 'react';

export default function useGifInfo(id, onPageLoad) {
  useEffect(
    () => {
      onPageLoad(id);
    }, [id],
  );
}
