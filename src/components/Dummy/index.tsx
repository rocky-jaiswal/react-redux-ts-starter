import * as React from 'react'

import styles from './styles.module.scss'

interface Props {
  color: string
}

const Dummy = (props: Props) => {
  return (
    <div className={styles.dummy_area} style={{ backgroundColor: props.color }}>
      <span>dummy component</span>
    </div>
  )
}

export default Dummy
