import { Dispatch as ReduxDispatch, Action } from 'redux'
import { Immutable } from 'seamless-immutable'
import { LocaleEnum } from './enums'

export interface AppState {
  loading: boolean
  locale: LocaleEnum
  clickCount: number
}

export type AppStateType = Immutable<AppState>

interface RootState {
  app: AppStateType
  router?: any
}

export type ActionType<T> = {
  type: string
  payload?: T
}

export type RootStateType = RootState

export type Dispatch = ReduxDispatch<Action>
