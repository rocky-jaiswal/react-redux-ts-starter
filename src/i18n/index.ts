import enTranslationMessages from './en';
import deTranslationMessages from './de';

import { LocaleEnum } from '../constants/enums';

const DEFAULT_LOCALE = LocaleEnum.en.toString();

export const formatTranslationMessages = (locale: string, messages: any): {} => {
  const defaultFormattedMessages: any = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  // tslint:disable-next-line:align
  }, {});
};

export const translationMessages: any = {
  en: formatTranslationMessages(LocaleEnum.en.toString(), enTranslationMessages),
  de: formatTranslationMessages(LocaleEnum.de.toString(), deTranslationMessages)
};
