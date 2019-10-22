import * as React from 'react'
import { useContext } from 'react'
import { IntlProvider } from 'react-intl'

import { translationMessages } from '../../i18n/'
import { LocaleContext } from '../../containers/App'

interface Props {
  children: React.ReactElement<{}>
}

const LanguageProvider = (props: Props) => {
  const context = useContext(LocaleContext)

  return (
    <IntlProvider
      locale={context.locale}
      key={context.locale}
      messages={translationMessages[context.locale]}
    >
      {React.Children.only(props.children)}
    </IntlProvider>
  )
}

export default LanguageProvider
