import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { todos, filter } from './todos.js';
import { tracks } from './playlist.js';
import { search } from './search.js';

const rootReducer = combineReducers({
  todos,
  filter,
  tracks,
  search,
  routing: routerReducer
});

export default rootReducer;
