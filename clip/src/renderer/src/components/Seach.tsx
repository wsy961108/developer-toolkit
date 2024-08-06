import useCodeSearch from '@renderer/hooks/useCodeSearch'

export default function Seach(): JSX.Element {
  const { handleSearch, search } = useCodeSearch()

  return (
    <div className="bg-slate-50 rounded-lg drag p-3">
      <section className="bg-slate-100 p-3 rounded-lg">
        <input
          className="w-full px-2 outline-none text-2xl text-slate-600 bg-slate-100"
          value={search}
          onChange={handleSearch}
        />
      </section>
    </div>
  )
}
