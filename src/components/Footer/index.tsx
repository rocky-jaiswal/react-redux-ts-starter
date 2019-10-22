import * as React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const Footer = (_props: {}) => {
  return (
    <div className={styles.footer}>
      <Link to="/">To Home</Link>
    </div>
  )
}

export default Footer
