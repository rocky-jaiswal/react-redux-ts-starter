import * as React from 'react'
import { IntlProvider } from 'react-intl'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { importMessages } from '../../i18n'
import { RootState } from '../../constants/types'

import en from '../../i18n/en.json' // default to english
import routes from '../../routes'

const App = () => {
  const locale = useSelector((state: RootState) => state.app.lang)

  const [messages, setMessages] = React.useState(en)
  React.useEffect(() => {
    importMessages(locale).then((msgs) => setMessages(msgs.default))
  }, [locale])

  return (
    <IntlProvider locale={locale} messages={messages}>
      <BrowserRouter>
        <Switch>
          {Object.keys(routes).map((route) => {
            return <Route {...routes[route]} key={routes[route].sequence} />
          })}
        </Switch>
      </BrowserRouter>
    </IntlProvider>
  )
}

export default App
