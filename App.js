import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './redux/store';
import ErrorBoundary from './ErrorBoundary';
import * as Sentry from 'sentry-expo';

// setup Sentry logger service
Sentry.init({
  dsn:
    'https://a90d532e538540f0b149ec881c1c3243@o482362.ingest.sentry.io/5532495',
  enableInExpoDevelopment: true,
  debug: true,
});

export default function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <View style={styles.container}>
          <TodoList />
          <StatusBar style="auto" />
        </View>
      </Provider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
    alignItems: 'center',
  },
});
