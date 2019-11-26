import { combineReducers } from 'redux';
import users from './users';
import events from './events';
import tickets from './tickets';

export default combineReducers({
  users,
  events,
  tickets
});
