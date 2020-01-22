import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import StartPage from './pages/StartPage';
import SearchPage from '../containers/SearchPageContainer';
import GifInfoPage from '../containers/GifInfoPageContainer';
import '../styles/App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/gif/:id">
          <GifInfoPage />
        </Route>
        <Route path="/">
          <StartPage />
        </Route>
      </Switch>
    </Router>
  );
}
