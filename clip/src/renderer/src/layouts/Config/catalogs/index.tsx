import styles from './index.module.scss'
import EditableText from '@renderer/components/EditableText'
import ScrollContainer from '@renderer/components/ScrollContainer'
import { Link, Outlet, useLoaderData } from 'react-router-dom'

function Catalogs(): JSX.Element {
  const data = useLoaderData() as CategoryType[]
  return (
    <>
      <div className={styles.container}>
        <div className={styles.scroll}>
          <ScrollContainer>
            {data.map((d) => (
              <div key={d.id} className={styles.item}>
                <Link to={`listings/${d.id}`} className={styles.link}>
                  <EditableText title={d.name} />
                </Link>
              </div>
            ))}
          </ScrollContainer>
        </div>
        <div className={styles.add} onClick={() => alert(2)}>
          +
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Catalogs
