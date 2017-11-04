import * as React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../constants/types';
import { IntlProvider } from 'react-intl';

import { LocaleEnum } from '../../constants/enums';
import { translationMessages } from '../../i18n/';

type Props = {
  locale: LocaleEnum;
};

class LanguageProvider extends React.Component<Props, {}> {

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

// Connected Type
type OwnProps = Pick<Props, 'locale'>;

const mapStateToProps = (rootState: RootStateType, ownProps: OwnProps) => ({
  locale: rootState.app.locale
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
