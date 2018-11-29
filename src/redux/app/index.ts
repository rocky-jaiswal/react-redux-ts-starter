import Immutable from 'seamless-immutable';
import { Action } from 'redux';

import { AppStateType } from '../../constants/types';
import { INC_CLICK_COUNT } from './actions';

const istate: AppStateType = {
  locale: 'en',
  loading: false,
  clickCount: 0
};

export const initialState = Immutable.from(istate);

// tslint:disable-next-line:no-any
const appReducer = (state = initialState, action: Action<any>): AppStateType => {
  switch (action.type) {

    default:
      return state;

    case INC_CLICK_COUNT:
      return state.set('clickCount', state.clickCount + 1);
  }
};

export default appReducer;
