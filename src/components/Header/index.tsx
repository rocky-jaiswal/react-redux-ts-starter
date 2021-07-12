import { Link } from 'react-router-dom'
import { LocaleEnum } from '../../constants/enums'

import styles from './styles.module.scss'

interface Props {
  switchLocale(lang: LocaleEnum): unknown
}

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <button onClick={() => props.switchLocale(LocaleEnum.en)}>EN</button>
        {' | '}
        <button onClick={() => props.switchLocale(LocaleEnum.de)}>DE</button>
      </div>
    </div>
  )
}

export default Header
