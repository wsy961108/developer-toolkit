import useCodeSelect from '@renderer/hooks/useCodeSelect'

export default function Result(): JSX.Element {
  const { data, current } = useCodeSelect()
  return (
    <main className="bg-slate-50 relative -top-[6px] rounded-br-lg rounded-bl-lg p-3">
      <section className="text-center text-xs">代码碎片工具</section>
      {data.map((code, index) => (
        <div
          key={code.id}
          className={`text-slate-700 truncate ${current === index ? 'bg-slate-600' : ''}`}
        >
          {code.content}
        </div>
      ))}
    </main>
  )
}
