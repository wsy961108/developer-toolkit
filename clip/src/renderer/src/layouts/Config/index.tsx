import useMoveWindow from '@renderer/hooks/useMoveWindow'
import { MutableRefObject, useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'
import Menu from '@renderer/components/Menu'

function Config(): JSX.Element {
  const moveRef = useRef<HTMLDivElement>(null)
  const { handleMove } = useMoveWindow()

  useEffect(() => {
    handleMove(moveRef as MutableRefObject<HTMLDivElement>, 'config')
  }, [])

  return (
    <div className={styles.container}>
      <div ref={moveRef} className={styles.title}>
        <div className={styles.btn_container}>
          <div
            className={`${styles.btn} ${styles.close}`}
            onClick={() => window.api.closeWindow('config')}
          />
        </div>
        <Menu />
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  )
}

export default Config
