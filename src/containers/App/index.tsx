import * as React from 'react';
import { Route, Switch } from 'react-router';

import routes from '../../routes';
import LanguageProvider from '../LanguageProvider';
import { LocaleEnum } from '../../constants/enums';

export class App extends React.Component<{}, never> {

  render() {
    return (
      <LanguageProvider locale={LocaleEnum.en}>
        <Switch>
          {Object.keys(routes).map((route) => {
            return <Route {...routes[route]} key={routes[route].sequence} />;
          })}
        </Switch>
      </LanguageProvider>
    );
  }

}
