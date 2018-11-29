import * as React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { Dispatch, RootStateType } from '../../constants/types';
import { translationMessages } from '../../i18n/';

interface Props {
  locale: string;
};

const mapStateToProps = (rootState: RootStateType, _ownProps: {}): Props => ({
  locale: rootState.app.locale
});

const mapDispatchToProps = (_dispatch: Dispatch): {} => {
  return {};
};

class LanguageProvider extends React.Component<Props> {

  render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        messages={translationMessages[this.props.locale]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
