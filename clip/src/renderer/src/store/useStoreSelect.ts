import { create } from 'zustand'

export interface SelectType {
  id: number
  content: string
}

export interface StoreSelect {
  data: SelectType[]
  setData: (data: SelectType[]) => void
}

export const useStoreSelect = create<StoreSelect>((set) => ({
  data: [],
  setData: (data): void => set({ data })
}))
