import { LocaleEnum } from './enums'

export interface AppState {
  counter: number
  lang: LocaleEnum
}

export interface RootState {
  app: AppState
}
