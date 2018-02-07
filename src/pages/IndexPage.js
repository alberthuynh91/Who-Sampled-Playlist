import React, { Component } from 'react';

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Who Sampled Playlist Creator</h1>
        <div>Create playlists of music sampled by your favorite aritsts</div>
        <a href="/login"><button className="btn" ><i className="fab fa-spotify"></i> Log in with Spotify</button></a>
      </div>
    );
  }
}
