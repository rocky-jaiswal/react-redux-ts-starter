import { combineReducers, Reducer, Action } from 'redux';
import { RootStateType } from '../constants/types';

import appReducer from './app/';

import { initialState as appInitialState } from './app';

export const reduxInitialState: RootStateType = {
  app: appInitialState
};

export function createReducer(): Reducer<RootStateType> {
  const reducer = combineReducers<RootStateType>({
    app: appReducer
  });

  const rootReducer = (state: RootStateType, action: Action<{}>): RootStateType => {
    // if (action.type === LOGOUT) {
    //   sessionStorage.clear();
    //   state = reduxInitialState;
    // }
    return reducer(state, action);
  };

  return rootReducer;
}
