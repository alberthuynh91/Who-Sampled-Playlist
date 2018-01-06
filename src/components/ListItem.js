/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';


export default class ListItem extends Component {
  // static propTypes = {
  //   todos: PropTypes.instanceOf(Immutable.List).isRequired,
  //   filter: PropTypes.string.isRequired
  // };

  handleAdd() {
    this.props.addTrack()
  }

  handleDelete(index) {
    this.props.deleteTrack(index);
  }

  render() {
    const {track} = this.props
    return (
      <tr>
        <td>{track.index}</td>
        <td>{track.artists[0].name}</td>
        <td>{track.name}</td>
      </tr>
    );
  }
}

