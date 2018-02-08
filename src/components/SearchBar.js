/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Immutable from 'immutable';

import styles from '../styles/searchbar.scss';

const getReqParams = (accessToken) => ({
  dataType: 'json',
  headers: { 'Authorization': 'Bearer ' + accessToken }
})

export default class SearchBar extends Component {
  // static propTypes = {
  //   todos: PropTypes.instanceOf(Immutable.List).isRequired,
  //   filter: PropTypes.string.isRequired
  // };

  state = {
    value: null,
    artist: {},
    artistImage: null,
    uris: [],
    tracks: []
  }

  handleAdd() {
    this.props.addTrack()
  }

  handleDelete(index) {
    this.props.deleteTrack(index);
  }

  updateInput(value) {
    this.setState({ value });
  }

  getArtistApi(artist) {
    const accessToken = localStorage.getItem('accessToken');  
    axios.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist', getReqParams(accessToken))
      .then(response => {
        console.log(`what did i get from search????? : `, response);
        const artistID = response.data.artists.items[0].id;

        // this.setState({ artist: response.data.artists.items[0] });
        this.props.setArtist(response.data.artists.items[0]);

        // this.setState({ artistImage: response.data.artists.items[0].images[0] });

        axios.get('https://api.spotify.com/v1/artists/' + artistID + '/top-tracks?country=SE', getReqParams(accessToken))
        .then(response => {
          console.log(`what is artist top tracks: `, response);
          this.props.addTracks({tracks: response.data.tracks});
          console.log(`what is tracks in the response: `, response.data.tracks);
          const uris = response.data.tracks.map((track) => {
            return track.uri;
          });
          console.log(`what is uris in the response: `, uris);
          this.props.addUris({uris})
        });
      });
  }

  handleSubmit() {
    const accessToken = localStorage.getItem('accessToken');

    if (this.state.value === `k` || this.state.value === 'Kanye West' || this.state.value === 'kanye') {
      // Returned from api w/ kanye west
      const sampledArtists = [`Labi%20Siffre`, `Otis%20Redding`];
      sampledArtists.forEach((artist) => {
        this.getArtistApi(artist)
      })
      
    }
  }

  render() {
    return (
      <div className={styles.parent__searchbar}>
        <div className={styles.title__searchbar}><i className="fab fa-spotify"></i> Search for an artist</div>        
        <div className={styles.container__searchbar}>
          <div><input className={styles.input__searchbar} value={this.state.value} type="text" onKeyPress={(e) => e.key === 'Enter' ? this.handleSubmit() : null} onChange={(event) => this.updateInput(event.target.value)} /></div>
          <div><button className={styles.button__search} onClick={(e) => this.handleSubmit()}><i className="fas fa-search"></i></button></div>
        </div>
      </div>
    );
  }
}

