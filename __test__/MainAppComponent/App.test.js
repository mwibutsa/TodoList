import { render } from '@testing-library/react-native';

import React from 'react';
import App from '../../App';

jest.mock('sentry-expo');

describe('<App />', () => {
  it('Should render a list of tasks correctly', async () => {
    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
