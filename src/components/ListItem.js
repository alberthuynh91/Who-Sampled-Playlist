/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import Tappable from 'react-tappable';
import { ToastContainer, toast } from 'react-toastify';

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
    this.setState({ isMouseInside: true, opacity: 0.7 })
  }

  mouseLeave = () => {
    this.setState({ isMouseInside: false, opacity: 1 })
  }

  showItemActions = (track) => {
    const {list, player} = this.props
    const { playing, currentAudio } = player;    
    const addTrack = (<span className={`${styles.actionitem__button} glyphicon glyphicon-plus`} onClick={(e) => {
      this.handleAdd(track)
      toast("Added a new track to your playlist. Scroll down to see it! 😎")
    }}></span>)
    const deleteTrack = (<span className={`${styles.actionitem__button} glyphicon glyphicon-trash`} onClick={(e) => {
      this.handleDelete(track)
      toast("Removed a track from your playlist")
    }}></span>)
    const previewState = playing && currentAudio.src === track.preview_url ? `${styles.actionitem__button} glyphicon glyphicon-pause` : `${styles.actionitem__button} glyphicon glyphicon-play`;
    const actions = list === `search` ? addTrack : deleteTrack
    if (this.state.isMouseInside || this.state.playing) {
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
      this.setState({playing: true, currentAudio: audio})
      play({audio})
    } else if (currentAudio && currentAudio.src !== previewUrl) {
      const audio = new Audio(previewUrl);
      this.setState({playing: true, currentAudio: audio})      
      play({audio})
    } else if (currentAudio && currentAudio.src === previewUrl) {
      pause()
      this.setState({playing: false, currentAudio: audio})
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
        onClick={() => {
          this.setState({isMouseInside: !this.state.isMouseInside, opacity: 0.7 })
        }}
      >
        <td><img src={track.album.images[2].url} /></td>
        <td><b>{track.artists[0].name}</b><br/>{track.name}</td>
        <td>
          {this.showItemActions(track)}
        </td>
        <ToastContainer />
      </tr>
      
    );
  }
}

