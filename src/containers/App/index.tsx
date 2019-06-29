import * as React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import { LocaleEnum } from '../../constants/enums';
import { Dispatch, RootStateType } from '../../constants/types';
import routes from '../../routes';
import LanguageProvider from '../../components/LanguageProvider';

interface Props {
  locale?: LocaleEnum;
}

const mapStateToProps = (rootState: RootStateType, _ownProps: {}): Props => ({
  locale: rootState.app.locale
});

const mapDispatchToProps = (_dispatch: Dispatch): {} => {
  return {};
};

export const LocaleContext = React.createContext({ locale: LocaleEnum.en });

class App extends React.Component<Props> {
  render() {
    return (
      <LocaleContext.Provider value={{ locale: this.props.locale || LocaleEnum.en }}>
        <LanguageProvider>
          <Switch>
            {Object.keys(routes).map(route => {
              return <Route {...routes[route]} key={routes[route].sequence} />;
            })}
          </Switch>
        </LanguageProvider>
      </LocaleContext.Provider>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
