import styles from './styles.module.scss'

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner} />
    </div>
  )
}

export default LoadingSpinner
