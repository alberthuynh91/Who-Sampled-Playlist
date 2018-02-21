/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import Tappable from 'react-tappable';
import styles from '../styles/listitem.scss';


export default class ListItem extends Component {

  state = {
    currentAudio: null,
    currentTrackPlaying: null,
    isMouseInside: false,
    playing: false,
    opacity: 1
  }

  mouseEnter = () => {
    console.log(`hey`)
    this.setState({ isMouseInside: true, opacity: 0.5 })
  }

  mouseLeave = () => {
    this.setState({ isMouseInside: false, opacity: 1 })
  }

  handleTapEvent = () => {
    console.log("touchTap", e)
    this.setState({ isMouseInside: true, opacity: 0.5 })
  }

  showItemActions = (track) => {
    const {list, player} = this.props
    const { playing, currentAudio } = player;    
    const addTrack = (<span className={`${styles.actionitem__button} glyphicon glyphicon-plus`} onClick={(e) => {this.handleAdd(track)}}></span>)
    const deleteTrack = (<span className={`${styles.actionitem__button} glyphicon glyphicon-trash`} onClick={(e) => {this.handleDelete(track)}}></span>)
    const previewState = playing && currentAudio.src === track.preview_url ? `${styles.actionitem__button} glyphicon glyphicon-pause` : `${styles.actionitem__button} glyphicon glyphicon-play`;
    const actions = list === `search` ? addTrack : deleteTrack
    if (this.state.isMouseInside) {
      return (
        <div className={styles.actionitems__container}>
          <span
            className={previewState}
            onClick={(e) => {this.handlePreview(track)}}></span>
          {actions}
        </div>
      )
    }
    return null
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
      <tr 
        style={{opacity: this.state.opacity}}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onCli
        onClick={() => {
          this.setState({isMouseInside: !this.state.isMouseInside, opacity: 0.5 })
        }}
      >
        {/* <td>{track.artists[0].name}</td> */}
        <td><img src={track.album.images[2].url} /></td>
        <td><b>{track.artists[0].name}</b><br/>{track.name}</td>
        <td>
          {this.showItemActions(track)}
        </td>
      </tr>
    );
  }
}

