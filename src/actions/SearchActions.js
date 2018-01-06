import { SET_ARTIST, SET_TRACKS, SET_URIS } from '../constants/ActionTypes';

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
