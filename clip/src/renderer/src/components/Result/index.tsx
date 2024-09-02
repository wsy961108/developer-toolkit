import useCodeSelect from '@renderer/hooks/useCodeSelect'
import styles from './result.module.scss'

export default function Result(): JSX.Element {
  const { data, id } = useCodeSelect()
  if (!data.length) return <></>
  return (
    <main className={styles.result}>
      {data.map((code) => (
        <div
          key={code.id}
          className={id === code.id ? styles.isActive : styles.item}
          //   className={`px-2 py-1 rounded-lg truncate ${id === code.id ? 'bg-blue-700 text-slate-50' : 'text-slate-600'}`}
        >
          {code.content}
        </div>
      ))}
    </main>
  )
}
