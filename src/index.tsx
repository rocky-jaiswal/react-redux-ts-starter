import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import 'normalize.css';

import { App } from './containers/App';
import { configureStore } from './store';

import './styles/variables.css';
import './styles/modifiers.css';
import './styles/reset.css';
import './styles/main.css';

const history  = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
