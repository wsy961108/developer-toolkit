import { Link, Outlet, useLoaderData } from 'react-router-dom'
import styles from './FragmentTitle.module.scss'
import { Button } from 'antd'

export default function FragmentTitle(): JSX.Element {
  const data = useLoaderData()
  return (
    <div className={styles.config}>
      <div className={styles.main}>
        <div className='flex'>
          <input type="text" />
          <Button>搜索</Button>
        </div>
        {data.map((_) => (
          <div key={_.id} className="truncate p-1 rounded-sm hover:text-red-300">
            <Link to={`/config/fragment/fragmentTitle/${_.category_id}/fragmentContent/${_.id}`}>
              {_.title}
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}
