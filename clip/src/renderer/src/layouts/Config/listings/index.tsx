import styles from './index.module.scss'
import EditableText from '@renderer/components/EditableText'
import { Link, NavLink, Outlet, useFetcher, useLoaderData, useSubmit } from 'react-router-dom'
import ScrollContainer from '@renderer/components/ScrollContainer'

function Listings(): JSX.Element {
  const data = useLoaderData() as ContentType[]
  const fetcher = useFetcher()
  const submit = useSubmit()

  const addListting = () => {
    submit({ action: 'add' }, { method: 'POST' })
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
        <div className={styles.add} onClick={addListting}>
          +
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Listings
