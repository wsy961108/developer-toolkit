import styles from './index.module.scss'

function Content(): JSX.Element {
  return (
    <div className={styles.container}>
      <textarea defaultValue={'123213'} />
    </div>
  )
}

export default Content
