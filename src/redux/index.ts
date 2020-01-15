import { combineReducers, Reducer, AnyAction } from 'redux'
import { RootStateType } from '../constants/types'
import { connectRouter } from 'connected-react-router'

import appReducer from './app/'

import { initialState as appInitialState } from './app'

export const reduxInitialState: RootStateType = {
  app: appInitialState
}

// tslint:disable-next-line:no-any
export function createReducer(history: any): Reducer<RootStateType> {
  const reducer = combineReducers<RootStateType>({
    app: appReducer,
    router: connectRouter(history)
  })

  const rootReducer = (
    state: RootStateType | undefined,
    action: AnyAction
  ): RootStateType => {
    // if (action.type === LOGOUT) {
    //   sessionStorage.clear();
    //   state = reduxInitialState;
    // }
    return reducer(state, action)
  }

  return rootReducer
}
