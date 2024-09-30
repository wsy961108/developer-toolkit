import { Add, Delete } from '@icon-park/react'
import styles from './index.module.scss'
import EditableText from '@renderer/components/EditableText'
import ScrollContainer from '@renderer/components/ScrollContainer'
import { NavLink, Outlet, useFetcher, useLoaderData, useParams, useSubmit } from 'react-router-dom'

function Catalogs(): JSX.Element {
  const data = useLoaderData() as CategoryType[]
  const fetcher = useFetcher()
  const submit = useSubmit()
  const params = useParams()
  const addCatalog = () => {
    submit({ action: 'add' }, { method: 'POST' })
  }
  const deleteCatalog = () => {
    if (!params.cid) return
    submit({ action: 'del', cid: params.cid }, { method: 'POST' })
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.scroll}>
          <ScrollContainer>
            {data.map((d) => (
              <div key={d.id} className={styles.item}>
                <NavLink
                  to={`listings/${d.id}`}
                  className={({ isActive }) => (isActive ? styles.active : styles.link)}
                >
                  <EditableText
                    data={d}
                    handleTitle={(e) =>
                      fetcher.submit({ name: e.value, id: d.id }, { method: 'PUT' })
                    }
                  />
                </NavLink>
              </div>
            ))}
          </ScrollContainer>
        </div>
        <div className={styles.icon_container}>
          <Add theme="outline" size="18" className={styles.add} onClick={addCatalog} />
          <Delete theme="outline" size="18" className={styles.del} onClick={deleteCatalog} />
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Catalogs
