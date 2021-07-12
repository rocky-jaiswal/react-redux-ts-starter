import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LocaleEnum } from '../../constants/enums'
import { AppState } from '../../constants/types'

const initialState: AppState = { counter: 0, lang: LocaleEnum.en }

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload
    },
    switchLocale: (state, action: PayloadAction<LocaleEnum>) => {
      state.lang = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, switchLocale } = appSlice.actions
export default appSlice.reducer
