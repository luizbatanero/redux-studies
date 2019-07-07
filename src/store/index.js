import { createStore } from 'redux';
import { throttle } from 'lodash';

import reducers from '../reducers';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000)
);

export default store;
