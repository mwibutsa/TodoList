import {
  GET_TASKS_FAILURE,
  GET_TASKS_START,
  GET_TASKS_SUCCESS,
} from '../actionTypes';

const initialState = {
  todoList: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TASKS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        todoList: payload.data,
        loading: false,
      };
    case GET_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};
