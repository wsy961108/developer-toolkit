import styles from './index.module.scss'
import EditableText from '@renderer/components/EditableText'
import { NavLink, Outlet, useFetcher, useLoaderData, useParams, useSubmit } from 'react-router-dom'
import ScrollContainer from '@renderer/components/ScrollContainer'
import { Add, Delete } from '@icon-park/react'

function Listings(): JSX.Element {
  const data = useLoaderData() as ContentType[]
  const fetcher = useFetcher()
  const submit = useSubmit()
  const params = useParams()
  const addListting = () => {
    submit({ action: 'add' }, { method: 'POST' })
  }

  const deleteListting = () => {
    if (!params.lid) return
    submit({ action: 'del', lid: params.lid }, { method: 'POST' })
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.scroll}>
          <ScrollContainer>
            {data.map((d) => (
              <div key={d.id} className={styles.item}>
                <NavLink
                  to={`content/${d.id}`}
                  className={({ isActive }) => (isActive ? styles.active : styles.link)}
                >
                  <EditableText
                    data={d}
                    handleTitle={(e) =>
                      fetcher.submit({ title: e.value, id: d.id }, { method: 'PUT' })
                    }
                  />
                </NavLink>
              </div>
            ))}
          </ScrollContainer>
        </div>
        <div className={styles.icon_container}>
          <Add theme="outline" size="18" className={styles.add} onClick={addListting} />
          <Delete theme="outline" size="18" className={styles.del} onClick={deleteListting} />
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Listings
