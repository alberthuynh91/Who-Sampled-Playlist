import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import IndexPage from './pages/IndexPage';
import SpotifyAppPage from './pages/SpotifyAppPage';
import store from './lib/store';

const history = syncHistoryWithStore(hashHistory, store);

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={IndexPage} />
        <Route path="/spotify" component={SpotifyAppPage} />
      </Router>
    );
  }
}
