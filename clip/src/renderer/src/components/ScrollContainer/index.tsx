import { Scrollbars } from 'react-custom-scrollbars'

interface ScrollContainerProps {
  children: React.ReactNode
}

export default function ScrollContainer({ children }: ScrollContainerProps): JSX.Element {
  return (
    <Scrollbars
      style={{ width: '100%', height: '100%' }}
      autoHide
      autoHideTimeout={1}
      autoHideDuration={1}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: 'transparent',
            width: 0,
            position: 'absolute',
            right: '-10px'
          }}
        />
      )}
    >
      {children}
    </Scrollbars>
  )
}
