import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import App from './containers/App'
import { configureStore } from './store'
import * as serviceWorker from './serviceWorker'

import 'normalize.css'
import './styles/reset.css'
import './styles/main.css'

const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(
  // tslint:disable-next-line:jsx-wrap-multiline
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
)

serviceWorker.register()
