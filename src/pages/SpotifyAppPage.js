import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import SpotifyApp from 'components/SpotifyApp';
import { connect } from 'react-redux';

import * as playlistActionCreators from '../actions/PlaylistActions.js';
import * as searchActionCreators from '../actions/SearchActions.js';

class SpotifyAppPage extends Component {
  render() {
    return (
      <div>
        <SpotifyApp />
      </div>
    );
  }
}


const mapStateToProps = function mapStateToProps(state) {
  return { tracks: state.tracks, filter: state.filter };
};

const mapDispatchToProps = (d) => bindActionCreators({
  ...searchActionCreators,
  ...playlistActionCreators
}, d);

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyAppPage);
