import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './lib/store';
const history = syncHistoryWithStore(hashHistory, store);
import IndexPage from 'pages/IndexPage';
import TodoApp from 'components/TodoApp';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import SpotifyAppPage from './pages/SpotifyAppPage';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={IndexPage} />
        <Route path="todo" component={TodoApp} />
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/spotify" component={SpotifyAppPage} />
      </Router>
    );
  }
}
