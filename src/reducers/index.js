import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { todos, filter } from './todos.js';
import { tracks } from './playlist.js';
import { search } from './search.js';
import { player } from './player.js';

const rootReducer = combineReducers({
  todos,
  filter,
  tracks,
  search,
  player,
  routing: routerReducer
});

export default rootReducer;
