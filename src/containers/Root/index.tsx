import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Dispatch, RootStateType } from '../../constants/types';
import { loadInitialData } from '../../redux/app/actions';

interface Props {
  loading: boolean;
}

interface DispatchProps {
  changeRoute(route: string): {};
  loadInitialData(): {};
}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    loading: state.app.loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    loadInitialData: () => dispatch(loadInitialData()),
    changeRoute: (payload: string) => dispatch(push(payload))
  };
};

export class Root extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    // this.props.loadInitialData();
  }

  render() {
    return (
      <div className="container">
        <h1><FormattedMessage id="app.welcome" /></h1>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
