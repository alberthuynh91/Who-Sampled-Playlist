/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Immutable from 'immutable';

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

  handleSubmit() {
    console.log(`submitting with: `, this.state.value);
    // Hit api with artist value that returns list of sampled artist
    if (this.state.value === `k` || this.state.value === 'kanye west' || this.state.value === 'kanye') {
      console.log(`hey its kanye west`);
      const at = localStorage.getItem('accessToken');
      // Returned from api w/ kanye west
      const sampledArtists = [`Labi Siffree`, `Otis Redding`];
      // Hit spotify api to get top 5 songs for each artist and display in a list
      axios.get('https://api.spotify.com/v1/search?q=otis%20redding&type=artist', {
        dataType: 'json',
        headers: {
            'Authorization': 'Bearer ' + at
        }
      })
      .then(response => {
        console.log(`what did i get from search????? : `, response);
        const artistID = response.data.artists.items[0].id;

        // this.setState({ artist: response.data.artists.items[0] });
        this.props.setArtist(response.data.artists.items[0]);

        // this.setState({ artistImage: response.data.artists.items[0].images[0] });

        axios.get('https://api.spotify.com/v1/artists/' + artistID + '/top-tracks?country=SE', {
          dataType: 'json',
          headers: {
              'Authorization': 'Bearer ' + at
          }
        })
        .then(response => {
          console.log(`what is artist top tracks: `, response);

          // this.setState({ tracks: response.data.tracks });
          this.props.setTracks(response.data.tracks);

          const uris = response.data.tracks.map((track) => {
            return track.uri;
          });
          console.log(`what is uris in the response: `, uris);

          // this.setState({ uris });
          this.props.setUris(uris)
        });
      });
    }
  }

  render() {
    console.log(`what is props in search bar: `, this.props)
    return (
      <div>
        <h3>Search for an artist</h3>
        <div><input value={this.state.value} type="text" onChange={(event) => this.updateInput(event.target.value)} /></div>
        <div><button className="btn btn-primary" onClick={() => this.handleSubmit()}>Submit</button></div>
      </div>
    );
  }
}

