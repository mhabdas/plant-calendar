import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
  user: userReducer,
  tasks: tasksReducer,
});

export default rootReducer;
