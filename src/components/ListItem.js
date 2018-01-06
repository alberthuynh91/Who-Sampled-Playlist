/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';


export default class ListItem extends Component {
  // static propTypes = {
  //   todos: PropTypes.instanceOf(Immutable.List).isRequired,
  //   filter: PropTypes.string.isRequired
  // };

  handleAdd(track) {
    console.log(`what is props in handleAdd: `, this.props)
    console.log(`attempting to add: `, track)
    this.props.addTrack(track)
  }

  handleDelete(index) {
    this.props.deleteTrack(index);
  }

  render() {
    const {track} = this.props
    return (
      <tr onClick={(e) => {this.handleAdd(track)}}>
        <td>{track.artists[0].name}</td>
        <td>{track.name}</td>
      </tr>
    );
  }
}

