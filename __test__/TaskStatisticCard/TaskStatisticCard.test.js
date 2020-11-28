import { render, fireEvent } from '@testing-library/react-native';

import React from 'react';
import TaskStatisticCard from '../../components/TaskStatisticCard';

describe('<TaskStatisticCard />', () => {
  it('Should call a filter function', () => {
    const props = { onPress: jest.fn(), status: 'done', value: 2 };
    const wrapper = render(<TaskStatisticCard {...props} />);
    fireEvent.press(wrapper.getByTestId('stat-card'));
    expect(props.onPress).toHaveBeenCalled();
  });
});
