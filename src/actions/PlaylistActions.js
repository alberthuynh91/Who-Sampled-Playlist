import { ADD_TRACK, DELETE_TRACK, CLEAR_TRACKS, GET_URIS } from '../constants/ActionTypes';

export function addTrack(payload) {
  return {
    type: ADD_TRACK,
    payload
  };
}

export function deleteTrack(payload) {
  return {
    type: DELETE_TRACK,
    payload
  };
}

export function clearTracks() {
  return {
    type: CLEAR_TRACKS
  };
}

export function getUris() {
  return {
    type: GET_URIS
  };
}

