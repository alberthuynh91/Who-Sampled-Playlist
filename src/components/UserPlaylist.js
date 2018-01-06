/* eslint-disable */


import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import ListItem from './ListItem.js'


export default class UserPlaylist extends Component {
  // static propTypes = {
  //   todos: PropTypes.instanceOf(Immutable.List).isRequired,
  //   filter: PropTypes.string.isRequired
  // };

  handleCheck(index) {
    this.props.toggleChecked(index);
  }

  handleDestroy(index) {
    this.props.deleteTodo(index);
  }

  render() {
    console.log(`what is props from userlist: `, this.props)
    const {tracks} = this.props;
    
    if (tracks.tracks.length > 0) {
      const trackItems = tracks.tracks.map((track, i) => {
        // console.log(`what is track: `, track);
        const index = i + 1;
        return (
          <ListItem index={index} track={track} />
        );
      });

      return (
        <div>
          <h3>Your Created Playlist</h3>
          <table className="table table-striped hover">
            <thead>
            <tr>
              <th scope="col">Artist</th>
              <th scope="col">Song Name</th>
              </tr>
            </thead>
            <tbody>
              {trackItems}
            </tbody>
          </table>
        </div>
      );
    }

    return null
  }
}

