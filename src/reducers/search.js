/* eslint-disable */

import { List, Map } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes.js';

const initialState = {
  value: null,
  artist: {},
  artistImage: null,
  uris: [],
  tracks: []
};

export function search(state = initialState, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_ARTIST:
      const artist = { artist: payload };
      return Object.assign({}, state, artist);
    case ActionTypes.SET_TRACKS:
      const tracks = { tracks: payload };
      return Object.assign({}, state, tracks);
    case ActionTypes.SET_URIS:
      const uris = { uris: payload };
      return Object.assign({}, state, uris);
    default:
      return state;
  }
}
