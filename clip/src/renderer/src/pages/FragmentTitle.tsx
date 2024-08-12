import { Link, Outlet } from 'react-router-dom'
import styles from './FragmentTitle.module.scss'

export default function FragmentTitle(): JSX.Element {
  const data = new Array(5).fill(0).map((_, index) => index)
  return (
    <div className={styles.config}>
      <div className={styles.main}>
        {data.map((_) => (
          <div key={_} className="truncate p-1 rounded-sm hover:text-red-300">
            <Link to="fragmentContent">也算是为了确保机会会</Link>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}
