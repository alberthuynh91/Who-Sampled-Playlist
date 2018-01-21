/* eslint-disable */


import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import ListItem from './ListItem.js'
import {map} from 'ramda'


export default class UserPlaylist extends Component {
  // static propTypes = {
  //   todos: PropTypes.instanceOf(Immutable.List).isRequired,
  //   filter: PropTypes.string.isRequired
  // };

  render() {
    const {tracks} = this.props;
    if (Object.keys(tracks.tracks).length > 0) {
      const trackItems = map((track) => {
        return <ListItem track={track} {...this.props} />
      }, tracks.tracks)

      const trackItemsArray = Object.values(trackItems)

      return (
        <div>
          <h3>Your Created Playlist</h3> <button className="btn btn-primary" onClick={() => this.props.clearTracks()}>Clear Playlist</button>
          <table className="table table-striped hover">
            <thead>
            <tr>
              <th scope="col">Artist</th>
              <th scope="col">Song Name</th>
              </tr>
            </thead>
            <tbody>
              {trackItemsArray}
            </tbody>
          </table>
        </div>
      );
    }

    return null
  }
}

