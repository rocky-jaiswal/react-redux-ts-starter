import Immutable from 'seamless-immutable';

import { AppStateType, AppState, ActionType } from '../../constants/types';
import { INC_CLICK_COUNT } from './actions';

export const istate: AppState = {
  locale: 'en',
  loading: false,
  clickCount: 0
};

export const initialState = Immutable.from(istate);

// tslint:disable-next-line:no-any
const appReducer = (state = initialState, action: ActionType<any>): AppStateType => {
  switch (action.type) {

    default:
      return state;

    case INC_CLICK_COUNT:
      return state.set('clickCount', state.clickCount + 1);
  }
};

export default appReducer;
