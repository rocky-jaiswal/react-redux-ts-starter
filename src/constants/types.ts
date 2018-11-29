import { Dispatch as ReduxDispatch, Action } from 'redux';

interface AppState {
  loading: boolean;
  locale: string;
  clickCount: number;
}

export type AppStateType = AppState;

interface RootState {
  app: AppState;
}

export type RootStateType = RootState;

export type Dispatch = ReduxDispatch<Action>;
