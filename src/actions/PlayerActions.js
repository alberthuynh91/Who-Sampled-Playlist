import { PLAY, PAUSE } from '../constants/ActionTypes';

export function play(payload) {
  return {
    type: PLAY,
    payload
  };
}

export function pause(payload) {
  return {
    type: PAUSE,
    payload
  };
}

