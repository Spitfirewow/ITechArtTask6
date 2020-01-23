import {
  useHistory,
} from 'react-router-dom';

export default function useSearchBar(text) {
  const history = useHistory();
  const enterBtn = 13;

  function onButtonClick(value) {
    if (text === value) { return; }
    history.push(`/search?q=${value}`);
  }

  function onKeyDown(e, value) {
    if (e.keyCode === enterBtn) onButtonClick(value);
  }

  return {
    onButtonClick, onKeyDown,
  };
}
