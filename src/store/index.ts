import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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

  // tslint:disable-next-line:no-any
  const store = createStore<RootStateType, {type: any}, {}, {}>(
    createReducer(),
    reduxInitialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  allSagas.map((saga) => sagaMiddleware.run(saga));

  return store;

}
