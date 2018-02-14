/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {Grid, Row, Col} from 'react-bootstrap'

import List from './List.js';
import UserPlaylist from './UserPlaylist.js';
import SearchBar from './SearchBar.js';
import Save from './Save.js';

import * as playlistActionCreators from '../actions/PlaylistActions.js';
import * as searchActionCreators from '../actions/SearchActions.js';
import * as playerActionCreators from '../actions/PlayerActions.js';

import styles from '../styles/app.scss';

class SpotifyApp extends Component {
  render() {
    const { tracks, filter, addTrack, deleteTrack, clearTracks } = this.props;
    const hasTracks = Object.keys(tracks.tracks).length > 0
    return (
      <div className="spotifyapp">
        <Grid>
          <Row>
            <SearchBar {...this.props} />
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <List {...this.props} />
            </Col>
            <Col xs={6} md={6}>
              <UserPlaylist {...this.props} />
            </Col>
          </Row>
          <Row>
          {hasTracks ? <Save {...this.props} /> : null }
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  console.log(`what is state?: `, state)
  return { tracks: state.tracks, search: state.search, player: state.player };
};

const mapDispatchToProps = (d) => bindActionCreators({
  ...searchActionCreators,
  ...playlistActionCreators,
  ...playerActionCreators
}, d)

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyApp);
