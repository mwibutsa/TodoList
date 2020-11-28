import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import Header from '../../components/Header';

describe('<Header />', () => {
  it('Should render cards correctly', async () => {
    const mockFilterTasks = jest.fn();
    const wrapper = render(
      <Header
        tasks={[
          { status: 'pending' },
          { status: 'in-progress' },
          { status: 'done' },
        ]}
        onFilterTasks={mockFilterTasks}
      />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
    const card = await wrapper.findAllByTestId('stat-card');
    expect(card).toHaveLength(4);
    fireEvent.press(card[0]);
    expect(mockFilterTasks).toHaveBeenCalledWith('pending');

    fireEvent.press(card[1]);
    expect(mockFilterTasks).toHaveBeenCalledWith('in-progress');

    fireEvent.press(card[2]);
    expect(mockFilterTasks).toHaveBeenCalledWith('done');

    fireEvent.press(card[3]);
    expect(mockFilterTasks).toHaveBeenCalledWith('');
  });

  it('should render cards with zero values if no tasks', () => {
    const tree = render(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
