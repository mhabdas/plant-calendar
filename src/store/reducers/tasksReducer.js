import { GET_TASKS } from '../constants/tasks';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };
    default:
      return state;
  }
}
