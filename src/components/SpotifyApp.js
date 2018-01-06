/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import List from './List.js';
import SearchBar from './SearchBar.js';

import * as playlistActionCreators from '../actions/PlaylistActions.js';
import * as searchActionCreators from '../actions/SearchActions.js';

class SpotifyApp extends Component {
  render() {
    console.log(`what is props in spotify app: `, this.props)
    const { tracks, filter, addTrack, deleteTrack, clearTracks } = this.props;
    
    return (
      <section className="spotifyapp">
        <SearchBar {...this.props} />
        <List tracks={tracks} addTrack={addTrack} />
      </section>
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return { tracks: state.tracks, search: state.search };
};

export default connect(mapStateToProps, searchActionCreators)(SpotifyApp);
