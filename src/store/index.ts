import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import pokemonApi from '../api/pokemon'
import appReducer from '../redux/app'
import allSagas from '../sagas'

export const setupStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: {
      app: appReducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware).concat(pokemonApi.middleware),
  })

  allSagas.map((saga) => sagaMiddleware.run(saga))
  return store
}

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof setupStore>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
