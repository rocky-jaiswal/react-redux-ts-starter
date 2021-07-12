import { useIntl } from 'react-intl'

import en from './en.json'
import { LocaleEnum } from '../constants/enums'

export type LocaleMessages = typeof en
export type LocaleKey = keyof LocaleMessages

export function useFormatMessage(): (id: LocaleKey) => string {
  const intl = useIntl()
  return (id) => intl.formatMessage({ id })
}

export function importMessages(locale: LocaleEnum) {
  switch (locale) {
    case 'en':
      return import('./en.json')
    case 'de':
      return import('./de.json')
    default:
      return Promise.resolve({ default: en })
  }
}
