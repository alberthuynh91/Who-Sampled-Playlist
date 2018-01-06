// import { List, Map } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes.js';

const initialState = {
  tracks: []
};

export function tracks(state = initialState, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_TRACK: {
      const newList = state.tracks;
      newList.push(payload);
      return Object.assign({}, state, { tracks: newList });
    }
    case ActionTypes.DELETE_TRACK:
      return state.delete(payload.index);
    case ActionTypes.CLEAR_TRACKS:
      return state.filter((todo) => !todo.get('completed'));
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
