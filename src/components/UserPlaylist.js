/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import ListItem from './ListItem.js'
import {map} from 'ramda'

export default class UserPlaylist extends Component {

  render() {
    const { tracks } = this.props
    if (Object.keys(tracks.tracks).length > 0) {
      const trackItems = map((track) => {
        return <ListItem track={track} {...this.props} list={`user`}/>
      }, tracks.tracks)

      const trackItemsArray = Object.values(trackItems)

      return (
        <div>
          <h2>Your Created Playlist</h2>
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

