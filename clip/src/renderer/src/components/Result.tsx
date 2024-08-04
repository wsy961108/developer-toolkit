import { useState } from 'react'
import { data as codes, DataType } from '@renderer/data'

export default function Result(): JSX.Element {
  const [data, setData] = useState(codes)

  return (
    <main className="bg-slate-50 -m-2">
      {data.map((code) => (
        <div key={code.id} className="text-slate-700 truncate">
          {code.content}
        </div>
      ))}
    </main>
  )
}
