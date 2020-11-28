import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Sentry from 'sentry-expo';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // log the error to Sentry
  componentDidCatch(error) {
    this.setState({ hasError: true });
    Sentry.Native.captureException(error);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }
    return (
      <View style={styles.ErrorBoundary}>
        <Text>There was an error</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ErrorBoundary: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ErrorBoundary;
