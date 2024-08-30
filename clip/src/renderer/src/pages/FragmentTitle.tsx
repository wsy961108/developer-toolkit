import { Link, Outlet, useLoaderData, useSubmit } from 'react-router-dom'
import styles from './FragmentTitle.module.scss'
import { Menu, Item, useContextMenu } from 'react-contexify'
import 'react-contexify/dist/ReactContexify.css'

export default function FragmentTitle(): JSX.Element {
  const data = useLoaderData()
  const submit = useSubmit()
  const { show } = useContextMenu({
    id: 'menu_id'
  })
  const handleContextMenu = (event) => {
    console.log(event)
    event.target.preventDefault() // 阻止浏览器的默认右键菜单
    show(event) // 传递事件对象
  }
  return (
    <div className={styles.config}>
      <div className={styles.main}>
        <div className="flex">
          <button onClick={() => submit({ action: 'add' }, { method: 'POST' })}>添加</button>
        </div>
        {data.map((_) => (
          <div key={_.id} className="truncate p-1 rounded-sm hover:text-red-300">
            <Link to={`/config/fragment/fragmentTitle/${_.category_id}/fragmentContent/${_.id}`}>
              <div onContextMenu={handleContextMenu}>
                {_.title}
                <Menu id="menu_id">
                  <Item onClick={() => alert('选项 1 被点击了')}>选项 1</Item>
                  <Item onClick={() => alert('选项 2 被点击了')}>选项 2</Item>
                  <Item onClick={() => alert('选项 3 被点击了')}>选项 3</Item>
                </Menu>
              </div>
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
