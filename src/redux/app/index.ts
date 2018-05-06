import * as Immutable from 'seamless-immutable';
import { Action } from 'redux';

import { AppStateType } from '../../constants/types';

const istate: AppStateType = {
  locale: 'en',
  loading: false
};

export const initialState = Immutable.from(istate);

// tslint:disable-next-line:no-any
const appReducer = (state = initialState, action: Action<any>): AppStateType => {
  switch (action.type) {

    default:
      return state;
  }
};

export default appReducer;
