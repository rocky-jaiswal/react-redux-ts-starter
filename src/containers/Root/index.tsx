import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Dispatch, RootStateType } from '../../constants/types';
import { loadInitialData, incrementClickCount } from '../../redux/app/actions';
import { withWrapper } from '../MainHoc';
import Dummy from '../../components/Dummy';

import styles from './styles.module.scss';

interface Props {
  loading: boolean;
  clickCount: number;
}

interface DispatchProps {
  changeRoute(route: string): {};
  loadInitialData(): {};
  incrementClickCount(): {};
}

const mapStateToProps = (state: RootStateType, _ownProps: {}): Props => {
  return {
    loading: state.app.loading,
    clickCount: state.app.clickCount
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    loadInitialData: () => dispatch(loadInitialData()),
    changeRoute: (payload: string) => dispatch(push(payload)),
    incrementClickCount: () => dispatch(incrementClickCount())
  };
};

export class Root extends React.Component<Props & DispatchProps> {

  componentDidMount() {
    // Uncomment to see sample XHR call
    // this.props.loadInitialData();
  }

  render() {
    return (
      <div className={styles.container}>
        <h1><FormattedMessage id="app.welcome" /></h1>
        <Dummy color="#96939B" />
        <h3>{this.props.clickCount}</h3>
        <button onClick={this.props.incrementClickCount}>Click!</button>
      </div>
    );
  }

}

export default withWrapper(connect(mapStateToProps, mapDispatchToProps)(Root));
