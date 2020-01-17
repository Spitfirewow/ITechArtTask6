import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StartPage from './pages/StartPage';
import SearchPage from './pages/SearchPage';
import GifInfoPage from './pages/GifInfoPage';
import APIManager from './APIManager';
import '../styles/App.css';

export default function App() {
  const apiManager = new APIManager();
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <SearchPage apiManager={apiManager} />
        </Route>
        <Route path="/gif/:id">
          <GifInfoPage apiManager={apiManager} />
        </Route>
        <Route path="/">
          <StartPage />
        </Route>
      </Switch>
    </Router>
  );
}
