import styles from './index.module.scss'
import EditableText from '@renderer/components/EditableText'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import ScrollContainer from '@renderer/components/ScrollContainer'

function Listings(): JSX.Element {
  const data = useLoaderData() as ContentType[]
  console.log(data)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.scroll}>
          <ScrollContainer>
            {data.map((d) => (
              <div key={d.id} className={styles.item}>
                <Link to={`content/${d.id}`} className={styles.link}>
                  <EditableText title={d.title} />
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

export default Listings
