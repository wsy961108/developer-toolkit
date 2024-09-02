import { OptionsType } from './create'

export const config = {
  search: {
    id: 0,
    options: {
      hash: '',
      initShow: true,
      frame: false,
      openDevTools: false,
      alwaysOnTop: true,
      transparent: false,
      width: 580,
      resizable: false
    }
  },
  config: {
    id: 0,
    options: {
      initShow: false,
      openDevTools: false,
      width: 505,
      height: 350,
      frame: true,
      transparent: false,
      alwaysOnTop: false,
      hash: '/#config'
    }
  }
} as Record<WindowNameType, { id: number; options: OptionsType }>
