import { Link, Outlet, useLoaderData } from 'react-router-dom'
import styles from './fragment.module.scss'

export default function Fragment(): JSX.Element {
  const data = useLoaderData()
  return (
    <div className={styles.config}>
      <div className={styles.main}>
        {data.map((_) => (
          <div key={_.id} className="truncate p-1 rounded-sm hover:text-red-300">
            <Link to={`/config/fragment/fragmentTitle/${_.id}`}>{_.name}</Link>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}
