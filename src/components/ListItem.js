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
    const {preview_url} = track
    const { playing, currentPreviewUrl } = this.props.player;
    const previewState = playing && currentPreviewUrl === preview_url ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play";
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

  handlePreview(track) {
    console.log(`what is props in handlePreview: `, this.props)
    const previewUrl = track.preview_url;
    const {play, pause} = this.props;
    const {currentAudio, playing, currentPreviewUrl} = this.props.player

    if (!currentAudio && !playing) {
      const audio = new Audio(previewUrl);
      audio.play();
      play({audio, previewUrl})
    } else if (currentAudio && currentPreviewUrl !== previewUrl) {
      currentAudio.pause();
      const audio = new Audio(previewUrl);
      audio.play();
      play({audio, previewUrl})
    } else if (currentAudio && currentPreviewUrl === previewUrl) {
      currentAudio.pause();
      pause()
    }
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

