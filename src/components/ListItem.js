/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';


export default class ListItem extends Component {

  state = {
    isMouseInside: false
  }

  mouseEnter = () => {
    this.setState({ isMouseInside: true })
  }

  mouseLeave = () => {
    this.setState({ isMouseInside: false })
  }

  showItemActions = (track) => {
    if (this.state.isMouseInside) {
      return (
        <div>
          <span className="glyphicon glyphicon-play"></span>
          <span 
            className="glyphicon glyphicon-plus" 
            onClick={(e) => {this.handleAdd(track)}}>
          </span>
          <span 
            className="glyphicon glyphicon-trash"
            onClick={(e) => {
              console.log(`deleting id: `, track)
              this.handleDelete(track)
              }}>
          </span>
        </div>
      )
    }
    return <div>
    </div>
  }

  handlePreview() {
  }

  handleAdd(track) {
    this.props.addTrack(track)
  }

  handleDelete(track) {
    this.props.deleteTrack(track);
    // this.props.clearTracks()
  }

  render() {
    const {track} = this.props
    return (
      <tr onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <td>{track.artists[0].name}</td>
        <td>{track.name}</td>
        <td>
          {this.showItemActions(track)}
        </td>
      </tr>
    );
  }
}

