import { Dispatch as ReduxDispatch, Action } from 'redux';
import { Immutable } from 'seamless-immutable';

export interface AppState {
  loading: boolean;
  locale: string;
  clickCount: number;
}

export type AppStateType = Immutable<AppState>;

interface RootState {
  app: AppStateType;
  // tslint:disable-next-line:no-any
  router?: any;
}

export type ActionType<T> = {
  type: string;
  payload?: T;
}

export type RootStateType = RootState;

export type Dispatch = ReduxDispatch<Action>;
