/* eslint-disable */

import { List, Map } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes.js';

const initialState = {
  artist: {},
  artistImage: null,
  uris: [],
  searchedArtist: null,
  tracks: []
};

export function search(state = initialState, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.CLEAR_SEARCH:
      return Object.assign({}, initialState, { tracks: [], uris: []});
    case ActionTypes.SET_ARTIST:
      const artist = { artist: payload };
      return Object.assign({}, state, artist);
    case ActionTypes.SET_SEARCHED_ARTIST:
      const searchedArtist = { searchedArtist: payload };
      return Object.assign({}, state, searchedArtist);
    case ActionTypes.SET_TRACKS:
      const tracks = { tracks: payload };
      return Object.assign({}, state, tracks);
    case ActionTypes.SET_URIS:
      const uris = { uris: payload };
      return Object.assign({}, state, uris);
    case ActionTypes.ADD_TRACKS: {
      // Refactor, don't use for each here
      const newTracks = state.tracks;
      payload.tracks.forEach((track) => {
        newTracks.push(track);
      })
      return Object.assign({}, state, { tracks: newTracks });
    }
    case ActionTypes.ADD_URIS: {
      const newUris = state.uris;
      // Refactor, don't use for each here      
      payload.uris.forEach((uri) => {
        newUris.push(uri);
      })
      return Object.assign({}, state, { uris: newUris });
    }
    default:
      return state;
  }
}
