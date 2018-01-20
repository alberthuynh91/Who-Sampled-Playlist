// import { List, Map } from 'immutable';
import { omit } from 'ramda';
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
      const newURIList = state.uris;
      newURIList.push(payload.uri);
      return Object.assign({}, state, { tracks: newTrackList, uris: newURIList });
    }
    case ActionTypes.DELETE_TRACK: {
      const newTrackList = omit([payload.id], state.tracks);
      return Object.assign({}, state, { tracks: newTrackList });
    }
    case ActionTypes.CLEAR_TRACKS:
      return initialState;
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
