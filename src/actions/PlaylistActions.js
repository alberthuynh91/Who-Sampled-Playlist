import { ADD_TRACK, TOGGLE_TRACK, DELETE_TRACK, CLEAR_TRACKS } from '../constants/ActionTypes';

export function addTrack(payload) {
  return {
    type: ADD_TRACK,
    payload
  };
}

export function toggleTrack(index) {
  return {
    type: TOGGLE_TRACK,
    payload: {
      index
    }
  };
}

export function deleteTrack(index) {
  return {
    type: DELETE_TRACK,
    payload: {
      index
    }
  };
}

export function clearTracks() {
  return {
    type: CLEAR_TRACKS
  };
}

