import * as React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const Header = (_props: {}) => {
  return (
    <div className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Header
