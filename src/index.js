import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { forbideWordsMiddleware } from './redux/middleware';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbideWordsMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)

const app = (
  <Provider store={store} >
    <App />
  </Provider>
)

render(
  app,
  document.getElementById('root')
);

serviceWorker.unregister();
