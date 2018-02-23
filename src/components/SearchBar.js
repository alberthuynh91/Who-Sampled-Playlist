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
    tracks: [],
    searchedArtist: null
  }

  handleAdd() {
    this.props.addTrack()
  }

  handleDelete(index) {
    this.props.deleteTrack(index);
  }

  handleSearch(searchedArtist) {
    this.setState({ searchedArtist });
    this.props.setSearchedArtist(searchedArtist)
  }

  clear() {
    this.props.clearSearch()
    this.props.clearTracks()
    this.props.resetPlayer()
  }

  getArtistApi(artist) {
    console.log(`what is this.props dude: `, this.props)
    const accessToken = localStorage.getItem('accessToken');
    axios.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist', getReqParams(accessToken))
      .then(response => {
        console.log(`what did i get from search????? : `, response);
        const artistID = response.data.artists.items[0].id;
        this.props.setArtist(response.data.artists.items[0]);
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

  handleSubmit(artist) {
    const accessToken = localStorage.getItem('accessToken');
    this.clear()
    this.handleSearch(artist)
    if (artist === `Kanye West` || this.state.searchedArtist === `K` || this.state.searchedArtist === `k` || this.state.searchedArtist === 'Kanye West' || this.state.searchedArtist === 'kanye west') {
      // Create mock api for this
      const sampledArtists = [`Labi%20Siffre`, `Otis%20Redding`, `Ponderosa%20Twins%20Plus%20One`];
      sampledArtists.forEach((artist) => {
        this.getArtistApi(artist)
      })
    }
    if (artist === `Schoolboy Q` || this.state.searchedArtist === `s` || this.state.searchedArtist === 'schoolboy q' || this.state.searchedArtist === 'Schoolboyq') {   
      // Create mock api for this
      const sampledArtists = [`Chromatics`, `Lissie`, `Nelly`];
      sampledArtists.forEach((artist) => {
        this.getArtistApi(artist)
      })
    }

    if (artist === `Kendrick Lamar` || this.state.searchedArtist === `kendrick` || this.state.searchedArtist === 'kendrick lamar' || this.state.searchedArtist === 'k dot') {   
      // Create mock api for this
      const sampledArtists = [`James%20Brown`, `Beach%20House`, `Bill%20Withers`];
      sampledArtists.forEach((artist) => {
        this.getArtistApi(artist)
      })
    }
  }

  render() {
    return (
      <div className={styles.parent__searchbar}>
        <div className={styles.title__searchbar}><i className="fab fa-spotify"></i></div>        
        <div className={styles.container__searchbar}>
            <button 
              className={styles.button__search}
              onClick={(e) => this.handleSubmit()}><i className="fas fa-search"></i></button>
          <input 
            className={styles.input__searchbar}
            value={this.state.searchedArtist}
            type="text"
            placeholder={`Search`}
            onKeyPress={(e) => e.key === 'Enter' ? this.handleSubmit() : null} onChange={(e) => this.handleSearch(e.target.value)}
          />
          
        </div>
        <h2 style={{color: '#FFFFFF'}}>Popular Searches</h2>
        <div style={{padding: '10px 10px'}}>
          <span>
            <img
              className={styles.popularsearch__item}
              src="https://c1.staticflickr.com/5/4709/40402693602_d47a8ee26b_o.png"
              onClick={() => this.handleSubmit(`Kanye West`)}
              />
          </span>
          <span>
            <img
              className={styles.popularsearch__item}
              src="https://c1.staticflickr.com/5/4760/25575504517_167e1355a3_o.png"
              onClick={() => this.handleSubmit(`Schoolboy Q`)}
              />
          </span>
          <span>
            <img
              className={styles.popularsearch__item}
              src="https://c1.staticflickr.com/5/4747/40446520501_5a08470c83_o.png"
              onClick={() => this.handleSubmit(`Kendrick Lamar`)}
              />
          </span>
        </div>
      </div>
    );
  }
}

