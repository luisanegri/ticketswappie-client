import { combineReducers } from 'redux';
import users from './users';
import events from './events';
import tickets from './tickets';
import comments from './comments';

export default combineReducers({
  users,
  events,
  tickets,
  comments
});
