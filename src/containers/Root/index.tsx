import { useSelector, useDispatch } from 'react-redux'

import { withLayout } from '../MainHoc'
import { useFormatMessage } from '../../i18n'

import { RootState } from '../../constants/types'
import { increment } from '../../redux/app'
import pokemonApi from '../../api/pokemon'

import Dummy from '../../components/Dummy'
import LoadingSpinner from '../../components/LoadingSpinner'

import styles from './styles.module.scss'

const Root = () => {
  const counter = useSelector((state: RootState) => state.app.counter)
  const dispatch = useDispatch()
  const formatMessage = useFormatMessage()

  const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className={styles.container}>
      <h1>{formatMessage('app.welcome')}</h1>
      {isLoading && <LoadingSpinner />}
      {!isLoading && error && <p>Error!</p>}
      {!isLoading && data && <img src={data.sprites.front_default} alt={'Pokemon'} />}
      <Dummy color="#96939B" />
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Click!</button>
    </div>
  )
}

export default withLayout(Root)
