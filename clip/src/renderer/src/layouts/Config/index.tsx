import useMoveWindow from '@renderer/hooks/useMoveWindow'
import { MutableRefObject, useEffect, useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './index.module.scss'

function Config(): JSX.Element {
  const moveRef = useRef<HTMLDivElement>(null)
  const { handleMove } = useMoveWindow()
  useEffect(() => {
    handleMove(moveRef as MutableRefObject<HTMLDivElement>)
  }, [])
  const menuData = new Array(1).fill(0).map((_, i) => ({
    id: i + 1,
    label: '导航',
    route: ''
  }))
  return (
    <div className={styles.container}>
      <div ref={moveRef} className={styles.title}>
        代码片段工具
      </div>
      <div className={styles.main}>
        <div className={styles.menu}>
          {menuData.map((i) => (
            <Link to={i.route} key={i.id} className={styles.item}>
              {i.label}
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Config
