import { OptionsType } from './create'

export const config = {
  search: {
    id: 0,
    options: {
      initShow: true,
      hash: '',
      openDevTools: true
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
      hash: '/#config'
    }
  }
} as Record<WindowNameType, { id: number; options: OptionsType }>
