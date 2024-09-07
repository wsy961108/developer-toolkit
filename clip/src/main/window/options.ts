import { OptionsType } from './create'

export const config = {
  search: {
    id: 0,
    options: {
      hash: '',
      frame: false,
      initShow: false,
      transparent: true,
      alwaysOnTop: true,
      width: 580,
      resizable: false
    }
  },
  config: {
    id: 0,
    options: {
      width: 1000,
      height: 350,
      initShow: true,
      frame: false,
      openDevTools: true,
      hash: '/#config'
    }
  }
} as Record<WindowNameType, { id: number; options: OptionsType }>
