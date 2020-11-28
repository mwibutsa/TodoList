import axios from 'axios';
import * as Sentry from 'sentry-expo';

// log axios request errors to sentry
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    Sentry.Native.captureException(error);
    return Promise.reject(error);
  },
);

export default axios;
