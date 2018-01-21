// import { List, Map } from 'immutable';
// import { omit, map } from 'ramda';
import * as ActionTypes from '../constants/ActionTypes.js';

const initialState = {
  playing: false,
  currentAudio: null,
  currentPreviewUrl: null
};

export function player(state = initialState, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.PLAY: {
      if (state.currentAudio) {
        state.currentAudio.pause();
      }
      payload.audio.play();
      return Object.assign({}, state, { playing: true, currentAudio: payload.audio, currentPreviewUrl: payload.previewUrl });
    }
    case ActionTypes.PAUSE: {
      state.currentAudio.pause();
      return Object.assign({}, state, { playing: false });
    }
    default:
      return state;
  }
}
