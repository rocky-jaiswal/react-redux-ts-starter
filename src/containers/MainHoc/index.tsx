import { useDispatch } from 'react-redux'

import Layout from '../../components/Layout'
import { LocaleEnum } from '../../constants/enums'

import { switchLocale } from '../../redux/app'

export const withLayout = (WrappedComponent: () => JSX.Element) => {
  const MainHoc = () => {
    const dispatch = useDispatch()

    return (
      <Layout switchLocale={(payload: LocaleEnum) => dispatch(switchLocale(payload))}>
        <WrappedComponent />
      </Layout>
    )
  }

  return MainHoc
}
