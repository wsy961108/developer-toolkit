import { useState } from 'react'
import Seach from '@renderer/components/Seach'
import Result from '@renderer/components/Result'
import { CodeContext } from '@renderer/context/CodeContext'
import { DataType } from '@renderer/data'

function App(): JSX.Element {
  const [data, setData] = useState<DataType[]>([])
  return (
    <CodeContext.Provider value={{ data, setData }}>
      <Seach />
      <Result />
    </CodeContext.Provider>
  )
}

export default App
