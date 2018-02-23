// import { List, Map } from 'immutable';
import { omit, map } from 'ramda';
import * as ActionTypes from '../constants/ActionTypes.js';

const initialState = {
  tracks: {},
  uris: []
};

export function tracks(state = initialState, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_TRACK: {
      const newTrackList = state.tracks;
      newTrackList[payload.id] = payload;
      return Object.assign({}, state, { tracks: newTrackList });
    }
    case ActionTypes.DELETE_TRACK: {
      const newTrackList = omit([payload.id], state.tracks);
      return Object.assign({}, state, { tracks: newTrackList });
    }
    case ActionTypes.GET_URIS: {
      const newTrackList = state.tracks;
      const uriList = Object.values(map((track) => (track.uri), newTrackList));
      return Object.assign({}, state, { uris: uriList });
    }
    case ActionTypes.CLEAR_TRACKS:
      return Object.assign({}, initialState, { tracks: {}, uris: [] });
    case ActionTypes.TOGGLE_CHECKED:
      return state.update(payload.index, todo => todo.set('completed', !todo.get('completed')));
    default:
      return state;
  }
}

export function filter(state = 'All', action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_FILTER:
      return payload;
    default:
      return state;
  }
}
