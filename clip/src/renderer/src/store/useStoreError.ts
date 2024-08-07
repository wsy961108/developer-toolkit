import { create } from 'zustand'

export interface StoreError {
  error: string
  setError: (error: string) => void
}

export const useStoreError = create<StoreError>((set) => ({
  error: '',
  setError: (error): void => set({ error })
}))
