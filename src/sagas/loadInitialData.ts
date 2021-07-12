import { takeLatest } from 'redux-saga/effects'

import { LOAD_INITIAL_DATA } from '../redux/app/actions'

export function* loadInitialData() {
  try {
    console.log('in saga')
    yield 1
  } catch (err) {
    console.error(err)
  }
}

export default function* loadInitialDataWatcher() {
  yield takeLatest(LOAD_INITIAL_DATA, loadInitialData)
}
