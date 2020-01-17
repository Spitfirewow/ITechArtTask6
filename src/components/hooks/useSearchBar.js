import { useState, useEffect } from 'react';
import {
  useLocation,
  useHistory,
} from 'react-router-dom';

export default function useSearchBar(text, disabled) {
  const [value, setValue] = useState(text);
  useEffect(() => { setValue(text); }, [text]);
  const history = useHistory();
  const [buttonState, setButtonState] = useState(disabled);
  const location = useLocation();
  const enterBtn = 13;

  function handleChange(event) {
    setValue(event.target.value);
    if (event.target.value === '') {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }

  function onButtonClick() {
    if (text === value) { return; }
    const request = value;
    const urlParams = new URLSearchParams();
    urlParams.set('q', request);
    location.pathname = 'search';
    location.search = urlParams.toString();
    history.push(`/search?q=${value}`);
  }

  function onKeyDown(e) {
    if (e.keyCode === enterBtn) onButtonClick();
  }

  return {
    value, handleChange, buttonState, onButtonClick, onKeyDown,
  };
}
