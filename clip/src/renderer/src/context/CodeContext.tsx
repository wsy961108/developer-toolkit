import { createContext, Dispatch, SetStateAction } from 'react'
import { DataType } from '@renderer/data'

interface ContextProps {
  data: DataType[]
  setData: Dispatch<SetStateAction<DataType[]>>
}

export const CodeContext = createContext<ContextProps | undefined>(undefined)
