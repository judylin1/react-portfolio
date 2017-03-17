import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const finalCreateStore = compose(
  // Middleware you want to use in production:
  applyMiddleware(thunk),
  // Other store enhancers if you use any
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers')),
    );
  }

  return store;
}
