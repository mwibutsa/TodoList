import { render } from '@testing-library/react-native';
import React from 'react';
import ErrorBoundary from '../../ErrorBoundary';
import * as Sentry from 'sentry-expo';

jest.mock('sentry-expo');
jest.spyOn(global.console, 'error');
global.console = { error: jest.fn() };

const error = new Error('test error');
const ComponentWithError = () => {
  throw error;
};

describe('<App />', () => {
  it('Should capture errors with error boundary and report them to Sentry.', () => {
    console.error.mockImplementationOnce(() => {});
    const tree = render(
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(console.error).toHaveBeenCalled();
    expect(Sentry.Native.captureException).toHaveBeenCalledWith(error);
  });
});
