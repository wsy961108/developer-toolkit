import { create } from 'zustand'

export interface StoreSelect {
  data: ContentType[]
  setData: (data: ContentType[]) => void
}

export const useStoreSelect = create<StoreSelect>((set) => ({
  data: [],
  setData: (data): void => set({ data })
}))
