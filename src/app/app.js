import React from 'react';
import { Provider } from 'react-redux';
window.React = React;
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './configureStore';
import AppContainer from './container';

const store = configureStore();
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('reactAppContainer')
);
