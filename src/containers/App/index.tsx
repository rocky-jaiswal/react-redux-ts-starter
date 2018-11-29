import * as React from 'react';
import { Route, Switch } from 'react-router';

import routes from '../../routes';
import LanguageProvider from '../LanguageProvider';

export class App extends React.Component<{}> {

  render() {
    return (
      <LanguageProvider>
        <Switch>
          {Object.keys(routes).map((route) => {
            return <Route {...routes[route]} key={routes[route].sequence} />;
          })}
        </Switch>
      </LanguageProvider>
    );
  }

}
