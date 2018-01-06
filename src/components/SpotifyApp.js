/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import List from './List.js';
import UserPlaylist from './UserPlaylist.js';
import SearchBar from './SearchBar.js';
import Save from './Save.js';

import * as playlistActionCreators from '../actions/PlaylistActions.js';
import * as searchActionCreators from '../actions/SearchActions.js';

class SpotifyApp extends Component {
  render() {
    console.log(`what is props in spotify app: `, this.props)
    const { tracks, filter, addTrack, deleteTrack, clearTracks } = this.props;
    const hasTracks = this.props.tracks.size > 0
    return (
      <section className="spotifyapp">
        <SearchBar {...this.props} />
        <List {...this.props} />
        <UserPlaylist {...this.props} />
        {hasTracks ? <Save {...this.props} /> : null }
        
      </section>
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return { tracks: state.tracks, search: state.search };
};

const mapDispatchToProps = (d) => bindActionCreators({
  ...searchActionCreators,
  ...playlistActionCreators
}, d)

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyApp);
