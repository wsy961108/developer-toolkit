import { create } from 'zustand'

export interface StoreSearch {
  search: string
  setSearch: (search: string) => void
}

export const useStoreSearch = create<StoreSearch>((set) => ({
  search: '',
  setSearch: (search): void => set({ search })
}))
