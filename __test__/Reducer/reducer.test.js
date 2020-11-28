import todoListReducer from '../../redux/reducers';
import {
  GET_TASKS_FAILURE,
  GET_TASKS_START,
  GET_TASKS_SUCCESS,
} from '../../redux/actionTypes';

describe('TODO LIST REDUCER', () => {
  const state = {
    todoList: [],
    loading: false,
    error: null,
  };
  it('Should be able to initialize state and starts loading', () => {
    const result = todoListReducer(state, { type: GET_TASKS_START });
    expect(result.loading).toEqual(true);
  });
  it('Should be able to update todo list', () => {
    const result = todoListReducer(state, {
      type: GET_TASKS_SUCCESS,
      payload: { data: 'Hello' },
    });
    expect(result.todoList).toEqual('Hello');
  });

  it('Should be able to add an error to redux store', () => {
    const result = todoListReducer(state, {
      type: GET_TASKS_FAILURE,
      payload: { error: 'error' },
    });
    expect(result.error).toEqual('error');
  });
});
