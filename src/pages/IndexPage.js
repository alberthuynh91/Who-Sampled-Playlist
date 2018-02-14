import React, { Component } from 'react';
import styles from '../styles/index.scss';

export default class IndexPage extends Component {

  render() {
    return (
      <div className={styles.container__index}>
        <h1>Who Sampled Playlist Creator</h1>
        <h2>Create playlists of music sampled by your favorite aritsts</h2>
        <a href="/login"><button className={styles['button__login-spotify']}><i className="fab fa-spotify"></i> Log in with Spotify</button></a>
      </div>
    );
  }
}
