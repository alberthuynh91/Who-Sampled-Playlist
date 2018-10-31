/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import PopularSearches from './PopularSearches'

import styles from '../styles/searchbar.scss';

const getReqParams = (accessToken) => ({
  dataType: 'json',
  headers: { 'Authorization': 'Bearer ' + accessToken }
})

export default class SearchBar extends Component {

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
    // Scrape whosampled 
    console.log(`waht is searched: `, searchedArtist)
    axios.post('/search', { artist: searchedArtist })
      .then((res) => {
        console.log(`what is res?? : `, res)
      })
  }

  clear() {
    this.props.clearSearch()
    this.props.clearTracks()
    this.props.resetPlayer()
  }

  getArtistApi(artist) {
    const accessToken = localStorage.getItem('accessToken');
    axios.get('https://api.spotify.com/v1/search?q=' + artist + '&type=artist', getReqParams(accessToken))
      .then(response => {
        const artistID = response.data.artists.items[0].id;
        this.props.setArtist(response.data.artists.items[0]);
        axios.get('https://api.spotify.com/v1/artists/' + artistID + '/top-tracks?country=SE', getReqParams(accessToken))
        .then(response => {
          this.props.addTracks({tracks: response.data.tracks});
          const uris = response.data.tracks.map((track) => {
            return track.uri;
          });
          this.props.addUris({uris})
        });
      });
  }

  handleSubmit(artist) {
    const accessToken = localStorage.getItem('accessToken');
    this.clear()
    this.handleSearch(artist)
    if (artist === `J Cole` || this.state.searchedArtist === `j` || this.state.searchedArtist === `j cole` || this.state.searchedArtist === 'J cole' || this.state.searchedArtist === 'jcole') {
      // Create mock api for this
      const sampledArtists = [`The%20Honey%20Drippers`, `Hubert%0Laws`, `The%20Family%20Circle`, `K.P%20&%20Envyi`];
      sampledArtists.forEach((artist) => {
        this.getArtistApi(artist)
      })
    }

    if (artist === `Kanye West` || this.state.searchedArtist === `K` || this.state.searchedArtist === `k` || this.state.searchedArtist === 'kanye west') {
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
            onKeyPress={(e) => e.key === 'Enter' ? this.handleSubmit(e.target.value) : null} onChange={(e) => this.handleSearch(e.target.value)}
          />
        </div>
        <PopularSearches clickHandler={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

