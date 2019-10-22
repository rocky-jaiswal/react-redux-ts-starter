import * as React from 'react'

import Footer from '../Footer'
import Header from '../Header'

import styles from './styles.module.scss'

interface Props {
  children?: React.ReactElement<{}>
}

const Layout = (props: Props) => {
  return (
    <div className={styles.main_container}>
      <Header />
      <div className={styles.page}>
        <div className={styles.main}>
          {React.Children.toArray(props.children)}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
