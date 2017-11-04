import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import { Dispatch, RootStateType } from '../../constants/types';
import GameArea from '../../components/GameArea';

interface Props {
  loading: boolean;
}

interface DispatchProps {
  changeRoute(route: string): {};
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    loading: state.app.loading
  };
};

const actions: DispatchProps = {
  changeRoute: push
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators<{}>(actions, dispatch);

export class Root extends React.Component<Props & DispatchProps> {

  render() {
    return (
      <div className="container">
        <h1><FormattedMessage id="app.welcome" /></h1>
        <GameArea width={80} height={80} />
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
