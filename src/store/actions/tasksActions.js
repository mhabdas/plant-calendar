import { GET_TASKS } from '../constants/tasks';

const getTasks = () => {
  return {
    type: GET_TASKS,
    tasks: request,
  };
};

export default getTasks;
