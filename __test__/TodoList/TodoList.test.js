import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import TodoList from '../../components/TodoList';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import axios from '../../customAxios';

jest.mock('sentry-expo');

jest.mock('axios');

describe('<TodoList />', () => {
  let mockStore;
  beforeEach(() => {
    mockStore = configureMockStore([]);
  });

  it('should be able to get todo list', () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          tasks: [
            {
              name: 'task1',
              due_date: new Date(),
              status: 'done',
              id: 1,
            },
          ],
        },
      }),
    );
    render(
      <Provider
        store={mockStore({
          todoList: {
            todoList: [],
            loading: false,
          },
        })}
      >
        <TodoList />
      </Provider>,
    );
    expect(axios.get).toHaveBeenCalledWith(
      'http://www.mocky.io/v2/5dfb8eab2f000056c4ffa05c',
    );
  });

  it('Should render a list of tasks correctly', async () => {
    const wrapper = render(
      <Provider
        store={mockStore({
          todoList: {
            todoList: {
              tasks: [
                {
                  name: 'Task1',
                  due_date: '01-01-0001',
                  status: 'pending',
                  id: 1,
                },
                {
                  name: 'Task2',
                  due_date: '01-01-0001',
                  status: 'done',
                  id: 2,
                },
              ],
            },
            loading: false,
          },
        })}
      >
        <TodoList />
      </Provider>,
    );
    const listItems = await wrapper.getAllByTestId('list-item');
    expect(listItems).toHaveLength(2);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('Should be able to filter tasks by status', async () => {
    const wrapper = render(
      <Provider
        store={mockStore({
          todoList: {
            todoList: {
              tasks: [
                {
                  name: 'Task1',
                  due_date: '01-01-0001',
                  status: 'pending',
                  id: 1,
                },
                {
                  name: 'Task2',
                  due_date: '01-01-0001',
                  status: 'done',
                  id: 2,
                },
                {
                  name: 'Task2',
                  due_date: '01-01-0001',
                  status: 'in-progress',
                  id: 3,
                },
              ],
            },
            loading: false,
          },
        })}
      >
        <TodoList />
      </Provider>,
    );
    const statCards = await wrapper.getAllByTestId('stat-card');
    expect(statCards).toHaveLength(4);

    // filter tasks by pending status
    fireEvent.press(statCards[0]);
    let listItems = await wrapper.getAllByTestId('list-item');
    expect(listItems).toHaveLength(1);

    // filter tasks by in-progress status

    fireEvent.press(statCards[1]);
    listItems = await wrapper.getAllByTestId('list-item');
    expect(listItems).toHaveLength(1);

    // filter tasks by completed status
    fireEvent.press(statCards[2]);
    listItems = await wrapper.getAllByTestId('list-item');
    expect(listItems).toHaveLength(1);

    // list all tasks
    fireEvent.press(statCards[3]);
    listItems = await wrapper.getAllByTestId('list-item');
    expect(listItems).toHaveLength(3);
  });

  it('Should render activity indicator', () => {
    const tree = render(
      <Provider
        store={mockStore({
          todoList: {
            todoList: [],
            loading: true,
          },
        })}
      >
        <TodoList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render an error if any', () => {
    const tree = render(
      <Provider
        store={mockStore({
          todoList: {
            todoList: [],
            loading: false,
            error: 'Something went wrong.',
          },
        })}
      >
        <TodoList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
