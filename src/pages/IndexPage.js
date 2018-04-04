import React, { Component } from 'react';
import styles from '../styles/index.scss';

export default class IndexPage extends Component {
  componentWillMount() {
    document.body.style.backgroundImage = 'url(https://c1.staticflickr.com/5/4794/40740300992_c0c993fb69_o.jpg)';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.maxWidth = '100%';
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
        <h2>Discover the good stuff! Create playlists of music that your favorite artist has sampled from!</h2>
        <a href="/login"><button className={styles['button__login-spotify']}><i className="fab fa-spotify"></i> Log in with Spotify</button></a>
        <div style={{ color: '#FFFFFF', fontWeight: 700, marginTop: '10px' }}>Created by Albert Huynh</div>
      </div>
    );
  }
}
