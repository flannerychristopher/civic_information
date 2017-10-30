import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './App';
import rootReducer from './reducers/reducers_index';

const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={store(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
