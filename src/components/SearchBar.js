/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Immutable from 'immutable';

  

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

          // this.setState({ tracks: response.data.tracks });
          this.props.addTracks({tracks: response.data.tracks});
          console.log(`what is tracks in the response: `, response.data.tracks);

          const uris = response.data.tracks.map((track) => {
            return track.uri;
          });
          console.log(`what is uris in the response: `, uris);

          // this.setState({ uris });
          this.props.addUris({uris})
        });
      });
  }

  handleSubmit() {
    const accessToken = localStorage.getItem('accessToken');  
    if (this.state.value === `k` || this.state.value === 'kanye west' || this.state.value === 'kanye') {
      // Returned from api w/ kanye west
      const sampledArtists = [`Labi%20Siffre`, `Otis%20Redding`];
      sampledArtists.forEach((artist) => {
        this.getArtistApi(artist)
      })
      
    }
  }

  render() {
    console.log(`what is props in searchbar: `, this.props)
    return (
      <div>
        <h3>Explore Artist</h3>
        <div><input value={this.state.value} type="text" onKeyPress={(e) => e.key === 'Enter' ? this.handleSubmit() : null} onChange={(event) => this.updateInput(event.target.value)} /></div>
        <div><button className="btn btn-primary" onClick={(e) => this.handleSubmit()}>Submit</button></div>
      </div>
    );
  }
}

