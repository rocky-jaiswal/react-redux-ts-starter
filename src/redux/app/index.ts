import Immutable from 'seamless-immutable'

import { AppStateType, AppState, ActionType } from '../../constants/types'
import { INC_CLICK_COUNT, SWITCH_LOCALE } from './actions'
import { LocaleEnum } from '../../constants/enums'

export const istate: AppState = {
  locale: LocaleEnum.en,
  loading: false,
  clickCount: 0
}

export const initialState = Immutable.from(istate)

// tslint:disable-next-line:no-any
const appReducer = (
  state = initialState,
  action: ActionType<any>
): AppStateType => {
  switch (action.type) {
    default:
      return state

    case INC_CLICK_COUNT:
      return state.set('clickCount', state.clickCount + 1)

    case SWITCH_LOCALE:
      return state.set('locale', action.payload)
  }
}

export default appReducer
