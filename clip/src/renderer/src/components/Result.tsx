import useCodeSelect from '@renderer/hooks/useCodeSelect'

export default function Result(): JSX.Element {
  const { data, id } = useCodeSelect()
  if (!data.length) return <></>
  return (
    <main className="bg-slate-50 rounded-br-lg rounded-bl-lg overflow relative -top-[6px] p-3">
      {data.map((code) => (
        <div
          key={code.id}
          className={`px-2 py-1 rounded-lg truncate ${id === code.id ? 'bg-blue-700 text-slate-50' : 'text-slate-600'}`}
        >
          {code.content}
        </div>
      ))}
    </main>
  )
}
