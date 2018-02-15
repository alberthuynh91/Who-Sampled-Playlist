/* eslint-disable */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import SpotifyApp from 'components/SpotifyApp';
import { connect } from 'react-redux';

import * as playlistActionCreators from '../actions/PlaylistActions.js';
import * as searchActionCreators from '../actions/SearchActions.js';
import * as playerActionCreators from '../actions/PlayerActions.js';

class SpotifyAppPage extends Component {
  componentWillMount() {
    localStorage.setItem('accessToken', this.props.location.query.access_token);
    localStorage.setItem('refreshToken', this.props.location.query.refresh_token);
  }

  render() {
    return (
      <div>
        <SpotifyApp />
      </div>
    );
  }
}


const mapStateToProps = function mapStateToProps(state) {
  return { tracks: state.tracks, filter: state.filter, player: state.player };
};

const mapDispatchToProps = (d) => bindActionCreators({
  ...searchActionCreators,
  ...playlistActionCreators,
  ...playerActionCreators
}, d);

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyAppPage);
