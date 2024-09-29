import menuData from '@renderer/components/Menu/menu.config.json'
import styles from '@renderer/components/Menu/menu.module.scss'
import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Menu(): JSX.Element {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/config/' + menuData[0].route)
  }, [])
  return (
    <div className={styles.menu}>
      {menuData.map((i) => (
        <NavLink
          to={i.route}
          key={i.route}
          className={({ isActive }) => {
            console.log(isActive)
            return isActive ? styles.menu_item_active : styles.menu_item
          }}
        >
          {i.label}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu
