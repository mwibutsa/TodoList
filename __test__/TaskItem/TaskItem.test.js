import { render } from '@testing-library/react-native';

import React from 'react';
import TaskItem from '../../components/TaskItem';

describe('<TaskItem />', () => {
  it('Should render a completed task', () => {
    const tree = render(
      <TaskItem name="Task1" status="done" dueDate="01-01-0001" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render a pending task', () => {
    const tree = render(
      <TaskItem name="Task1" status="pending" dueDate="01-01-0001" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render an in-progress task', () => {
    const tree = render(
      <TaskItem name="Task1" status="in-progress" dueDate="01-01-0001" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
