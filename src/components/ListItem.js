/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';


export default class ListItem extends Component {

  state = {
    isMouseInside: false,
    playing: false,
    currentTrackPlaying: null,
    currentAudio: null
  }

  mouseEnter = () => {
    this.setState({ isMouseInside: true })
  }

  mouseLeave = () => {
    this.setState({ isMouseInside: false })
  }

  showItemActions = (track) => {
    const { playing, currentAudio } = this.props.player;
    const previewState = playing && currentAudio.src === track.preview_url ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play";
    if (this.state.isMouseInside) {
      return (
        <div>
          <span
            className={previewState}
            onClick={(e) => {this.handlePreview(track)}}></span>
          <span 
            className="glyphicon glyphicon-plus" 
            onClick={(e) => {this.handleAdd(track)}}>
          </span>
          <span 
            className="glyphicon glyphicon-trash"
            onClick={(e) => { this.handleDelete(track) }}>
          </span>
        </div>
      )
    }
    return <div>
    </div>
  }

  handlePreview(track) {
    const previewUrl = track.preview_url;
    const {play, pause} = this.props;
    const {currentAudio, playing} = this.props.player
    if (!currentAudio || !playing) {
      const audio = new Audio(previewUrl);
      play({audio})
    } else if (currentAudio && currentAudio.src !== previewUrl) {
      const audio = new Audio(previewUrl);
      play({audio})
    } else if (currentAudio && currentAudio.src === previewUrl) {
      pause()
    }
  }

  handleAdd(track) {
    this.props.addTrack(track)
  }

  handleDelete(track) {
    this.props.deleteTrack(track);
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

