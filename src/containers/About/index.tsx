import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { Dispatch, RootStateType } from '../../constants/types';

interface Props {
  loading: boolean;
}

interface DispatchProps {}

const mapStateToProps = (state: RootStateType, ownProps: {}): Props => {
  return {
    loading: state.app.loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {};
};

export class About extends React.Component<Props & DispatchProps> {

  render() {
    return (
      <div className="container">
        <h1><FormattedMessage id="app.about" /></h1>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(About);
