import * as Immutable from 'seamless-immutable';

import { ActionType, AppStateType } from '../../constants/types';

const istate: AppStateType = {
  locale: 'en',
  loading: false
};

export const initialState = Immutable.from(istate);

// tslint:disable-next-line:no-any
const appReducer = (state = initialState, action: ActionType<any>): AppStateType => {
  switch (action.type) {

    default:
      return state;
  }
};

export default appReducer;
