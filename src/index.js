import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Bring in the new middleware for sagas. WOOT!
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
// Redux imports
import rootReducer from './redux/reducers/_root.reducer';
import rootSaga from './redux/sagas/_root.saga';

// Saga setup 1 - create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const reduxStore = createStore(
  // imported root reducer
  rootReducer,
  //  Saga setup 4 - add it to the redux middleware
  applyMiddleware(logger, sagaMiddleware)
);

// Saga setup 3 - make the root/watcherSaga run (must put this after createStore)
sagaMiddleware.run( rootSaga );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
