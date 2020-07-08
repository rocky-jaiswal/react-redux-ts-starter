import * as React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { RootStateType, Dispatch } from '../../constants/types'

interface StateProps {}

interface DispatchProps {}

function mapStateToProps(_state: RootStateType, ownProps: any): StateProps {
  return {
    ...ownProps,
  }
}

function mapDispatchToProps(_dispatch: Dispatch): DispatchProps {
  return {}
}

export const withWrapper = (WrappedComponent: any) => {
  const MainHoc = (props: any) => {
    return (
      <Layout>
        <WrappedComponent match={props.match} />
      </Layout>
    )
  }

  return connect(mapStateToProps, mapDispatchToProps)(MainHoc)
}
