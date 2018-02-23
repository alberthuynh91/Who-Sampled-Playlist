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

  handleSubmit(artist) {
    const accessToken = localStorage.getItem('accessToken');
    
    if (artist === `k` || this.state.searchedArtist === `K` || this.state.searchedArtist === `k` || this.state.searchedArtist === 'Kanye West' || this.state.searchedArtist === 'kanye west') {
      // Create mock api for this
      const sampledArtists = [`Labi%20Siffre`, `Otis%20Redding`, `Ponderosa%20Twins%20Plus%20One`];
      sampledArtists.forEach((artist) => {
        this.getArtistApi(artist)
      })
    }
    if (artist === `s` || this.state.searchedArtist === `s` || this.state.searchedArtist === 'schoolboy q' || this.state.searchedArtist === 'Schoolboyq') {   
      // Create mock api for this
      const sampledArtists = [`Chromatics`, `Lissie`, `Nelly`];
      sampledArtists.forEach((artist) => {
        this.getArtistApi(artist)
      })
    }

    if (artist === `kendrick` || this.state.searchedArtist === `kendrick` || this.state.searchedArtist === 'kendrick lamar' || this.state.searchedArtist === 'k dot') {   
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
              style={{width: 75, height: 75}}
              src="https://vignette.wikia.nocookie.net/totaldramacampsnfanfics/images/a/a1/Kanye_West_Happy_Head.png/revision/latest?cb=20150930013411"
              onClick={() => this.handleSubmit(`k`)}
              />
          </span>
          <span>
            <img
              style={{width: 75, height: 75}}
              src="http://24.media.tumblr.com/b5dc66a013f5b8d6c66b09822d63bbc0/tumblr_mzruwe2pPA1rpc1rco1_r2_500.gif"
              onClick={() => this.handleSubmit(`s`)}
              />
          </span>
          <span>
            <img
              style={{width: 75, height: 75}}
              src="http://drakevseverybody.com/images/Kendrick_Lamar_Drake_Vs_Everybody_Rap_Beef_OVO_Feud.png"
              onClick={() => this.handleSubmit(`kendrick`)}
              />
          </span>
        </div>
      </div>
    );
  }
}

