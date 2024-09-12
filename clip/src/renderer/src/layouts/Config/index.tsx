import useMoveWindow from '@renderer/hooks/useMoveWindow'
import { MutableRefObject, useEffect, useRef } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const menuData = [
  {
    id: 1,
    label: '导航',
    route: 'catalogs'
  },
  {
    id: 2,
    label: '导航2',
    route: 'casdatalogs'
  }
]

function Config(): JSX.Element {
  const navigate = useNavigate()
  const moveRef = useRef<HTMLDivElement>(null)
  const { handleMove } = useMoveWindow()

  useEffect(() => {
    handleMove(moveRef as MutableRefObject<HTMLDivElement>, 'config')
    navigate('/config/catalogs')
  }, [])

  return (
    <div className={styles.container}>
      <div ref={moveRef} className={styles.title}>
        代码片段工具
      </div>
      <div className={styles.main}>
        <div className={styles.menu}>
          {menuData.map((i) => (
            <NavLink
              to={i.route}
              key={i.id}
              className={({ isActive }) => (isActive ? styles.active : styles.item)}
            >
              {i.label}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Config
