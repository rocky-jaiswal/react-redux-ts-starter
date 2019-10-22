import { LocaleEnum } from '../../constants/enums'

export const LOAD_INITIAL_DATA = 'app/LOAD_INITIAL_DATA'
export const LOAD_INITIAL_DATA_INPROGRESS = 'app/LOAD_INITIAL_DATA_INPROGRESS'
export const LOAD_INITIAL_DATA_SUCCESS = 'app/LOAD_INITIAL_DATA_SUCCESS'
export const LOAD_INITIAL_DATA_FAILED = 'app/LOAD_INITIAL_DATA_FAILED'
export const INC_CLICK_COUNT = 'app/INC_CLICK_COUNT'
export const SWITCH_LOCALE = 'app/SWITCH_LOCALE'

export const loadInitialData = () => {
  return {
    type: LOAD_INITIAL_DATA
  }
}

export const loadInitialDataInProgress = () => {
  return {
    type: LOAD_INITIAL_DATA_INPROGRESS
  }
}

export const loadInitialDataSuccess = () => {
  return {
    type: LOAD_INITIAL_DATA_SUCCESS
  }
}

export const loadInitialDataFailed = () => {
  return {
    type: LOAD_INITIAL_DATA_FAILED
  }
}

export const incrementClickCount = () => {
  return {
    type: INC_CLICK_COUNT
  }
}

export const switchLanguage = (payload: LocaleEnum) => {
  return {
    type: SWITCH_LOCALE
  }
}
