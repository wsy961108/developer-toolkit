export interface DataType {
  id: number
  content: string
}

export const data = [
  {
    id: 1,
    content: "import { electronApp, optimizer, is } from '@electron-toolkit/utils'"
  },
  {
    id: 2,
    content: "import icon from '../../resources/icon.png?asset'"
  },
  {
    id: 3,
    content: 'function createWindow(): void {'
  },
  {
    id: 4,
    content: 'function createWindow(): void {'
  },
  {
    id: 5,
    content: 'function createWindow(): void {'
  }
] as DataType[]
