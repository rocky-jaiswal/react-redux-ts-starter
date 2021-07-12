import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
import { setupStore } from './store'
// import * as serviceWorker from './serviceWorker'

import 'normalize.css'
import './styles/main.css'

ReactDOM.render(
  <Provider store={setupStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root') as HTMLElement
)

// serviceWorker.register()
