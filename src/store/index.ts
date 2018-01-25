import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { RootStateType } from '../constants/types';
import { createReducer, reduxInitialState } from '../redux';
import allSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(history: History): Store<RootStateType> {

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
      // tslint:disable-next-line:no-string-literal
      window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
      // tslint:disable-next-line:no-string-literal
      window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] : compose;

  const store = createStore<RootStateType>(
    createReducer(),
    reduxInitialState,
    composeEnhancers(...enhancers)
  );

  allSagas.map((saga) => sagaMiddleware.run(saga));

  return store;

}
