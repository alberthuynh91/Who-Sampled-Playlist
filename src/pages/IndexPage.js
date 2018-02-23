import React, { Component } from 'react';
import styles from '../styles/index.scss';

export default class IndexPage extends Component {
  componentWillMount() {
    document.body.style.backgroundImage = 'url(https://c1.staticflickr.com/9/8413/8703080949_99a9353a97_k.jpg)';
    document.body.style.height = '100%';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
  }
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
