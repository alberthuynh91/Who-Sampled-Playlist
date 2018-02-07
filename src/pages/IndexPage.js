import React, { Component } from 'react';
import { Link } from 'react-router';

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Who Sampled Playlist Creator</h1>
        <div>Create playlists of music sampled by your favorite aritsts</div>
        <Link to="/login"><button className="btn" >Log in with Spotify</button></Link>
        <i className="fa fa-spotify"></i>
      </div>
    );
  }
}
