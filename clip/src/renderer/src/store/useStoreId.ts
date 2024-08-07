import { create } from 'zustand'

export interface StoreId {
  id: number
  setId: (id: number) => void
}

export const useStoreId = create<StoreId>((set) => ({
  id: 0,
  setId: (id): void => set({ id })
}))
