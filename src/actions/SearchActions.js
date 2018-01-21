import { SET_ARTIST, SET_TRACKS, SET_URIS, ADD_TRACKS, ADD_URIS } from '../constants/ActionTypes';

export function setArtist(payload) {
  return {
    type: SET_ARTIST,
    payload
  };
}

export function setTracks(payload) {
  return {
    type: SET_TRACKS,
    payload
  };
}

export function setUris(payload) {
  return {
    type: SET_URIS,
    payload
  };
}

export function addTracks(payload) {
  return {
    type: ADD_TRACKS,
    payload
  };
}

export function addUris(payload) {
  return {
    type: ADD_URIS,
    payload
  };
}
