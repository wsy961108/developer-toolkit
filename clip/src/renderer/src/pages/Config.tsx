import { Link, Outlet } from 'react-router-dom'
import styles from './config.module.scss'

export default function Config(): JSX.Element {
  const data = [
    { label: '片段', icon: '片段', route: '' },
    { label: '设置', icon: '片段', route: 'option' }
  ]

  return (
    <div className={styles.config}>
      <div className={styles.menu}>
        {data.map((i) => (
          <div
            key={i.label}
            className="w-[40px] h-[40px] mx-[10px] text-center text-xs rounded-md bg-slate-50 flex flex-col justify-center items-center hover:bg-slate-600"
          >
            <div>{i.icon}</div>
            <Link to={i.route}>{i.label}</Link>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}
