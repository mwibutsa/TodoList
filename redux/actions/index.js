import {
  GET_TASKS_FAILURE,
  GET_TASKS_START,
  GET_TASKS_SUCCESS,
} from '../actionTypes';

import axios from '../../customAxios';

// start action
const getTasksStart = () => ({
  type: GET_TASKS_START,
});

// success action
const getTasksSuccess = (data) => ({
  type: GET_TASKS_SUCCESS,
  payload: { data },
});

// failure action
const getTasksFailure = (error) => ({
  type: GET_TASKS_FAILURE,
  payload: {
    error,
  },
});

const getTodoList = () => async (dispatch) => {
  try {
    dispatch(getTasksStart());
    const { data } = await axios.get(
      'http://www.mocky.io/v2/5dfb8eab2f000056c4ffa05c',
    );
    dispatch(getTasksSuccess(data));
  } catch (error) {
    dispatch(getTasksFailure(error));
  }
};
export default getTodoList;
