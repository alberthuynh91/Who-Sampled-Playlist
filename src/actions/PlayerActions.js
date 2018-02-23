import { PLAY, PAUSE, RESET_PLAYER } from '../constants/ActionTypes';

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

export function resetPlayer() {
  return {
    type: RESET_PLAYER
  };
}
