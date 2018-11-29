import * as React from 'react';

import styles from './styles.module.css';

interface Props {
  color: string;
}

const Dummy = (props: Props) => {
  return (
    <div
      className={styles.dummy_area}
      style={{ backgroundColor: props.color }}
    >
      <span />
    </div>
  );
};

export default Dummy;
