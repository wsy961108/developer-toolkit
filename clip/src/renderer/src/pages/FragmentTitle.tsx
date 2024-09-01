import { NavLink, Outlet, useLoaderData, useSubmit } from 'react-router-dom'
import styles from './FragmentTitle.module.scss'
import { Menu, Item, useContextMenu } from 'react-contexify'
import 'react-contexify/dist/ReactContexify.css'

export default function FragmentTitle(): JSX.Element {
  const data = useLoaderData()
  console.log('最后执行')
  const submit = useSubmit()
  const { show } = useContextMenu({
    id: 'menu_id'
  })
  const handleContextMenu = (event) => {
    show({
      event
    })
  }
  const style: React.CSSProperties = {
    '--contexify-menu-shadow': `inset rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`
  } as React.CSSProperties
  return (
    <div className={styles.config} style={style}>
      <div className={styles.main}>
        <div className="flex">
          <button onClick={() => submit({ action: 'add' }, { method: 'POST' })}>添加</button>
        </div>
        {data.map((_) => (
          <div key={_.id} className="truncate p-1 rounded-sm hover:text-red-300">
            <NavLink to={`/config/fragment/fragmentTitle/${_.category_id}/fragmentContent/${_.id}`}>
              <div onContextMenu={handleContextMenu}>
                {_.title}
                <Menu id="menu_id">
                  <Item
                    onClick={() =>
                      submit({ action: 'del', id: _.id, cid: _.cid }, { method: 'DELETE' })
                    }
                  >
                    删除
                  </Item>
                </Menu>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}
