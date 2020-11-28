import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import todoListReducer from './reducers';

// configure combine reducers in case there is a need to add more
const baseReducer = combineReducers({
  todoList: todoListReducer,
});

const store = createStore(
  baseReducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

export default store;
