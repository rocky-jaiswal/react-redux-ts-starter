import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'

import { Dispatch, RootStateType } from '../../constants/types'
import { withWrapper } from '../MainHoc'

interface Props {
  loading: boolean
}

interface DispatchProps {}

const mapStateToProps = (state: RootStateType, _ownProps: {}): Props => {
  return {
    loading: state.app.loading
  }
}

const mapDispatchToProps = (_dispatch: Dispatch): DispatchProps => {
  return {}
}

const About = (_props: Props & DispatchProps) => {
  return (
    <div className="container">
      <h1>
        <FormattedMessage id="app.about" />
      </h1>
    </div>
  )
}

export default withWrapper(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(About)
)
