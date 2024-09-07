import EditableText from '@renderer/components/EditableText'
import useMoveWindow from '@renderer/hooks/useMoveWindow'
import { MutableRefObject, useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'

function Config(): JSX.Element {
  const moveRef = useRef<HTMLDivElement>(null)
  const { handleMove } = useMoveWindow()
  useEffect(() => {
    handleMove(moveRef as MutableRefObject<HTMLDivElement>)
  }, [])
  const menuData = new Array(100).fill(0).map((_, i) => ({
    id: i + 1,
    label: '导航'
  }))
  const fileData = new Array(2).fill(0).map((_, i) => ({
    id: i + 1,
    label: '文件'
  }))
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex flex-col">
      <div ref={moveRef} className="w-full flex justify-center items-center h-10 select-none">
        标题
      </div>
      <div className="flex-1 overflow-hidden flex box-border px-5 pb-7 gap-3">
        <div className="w-12 mr-2">
          <Scrollbars
            style={{ width: '100%', height: '100%' }}
            autoHide
            autoHideTimeout={1}
            autoHideDuration={1}
            renderThumbVertical={({ style, ...props }) => (
              <div {...props} style={{ ...style, backgroundColor: 'transparent' }} />
            )}
          >
            {menuData.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center h-12 cursor-pointer rounded-lg mb-3 bg-gray-200 hover:bg-gray-100"
              >
                {item.label}
              </div>
            ))}
          </Scrollbars>
        </div>
        <div className="w-40 bg-gray-200 rounded-lg p-2">
          {fileData.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center h-9 cursor-pointer rounded-lg mb-1 bg-gray-200 hover:bg-gray-100  p-1.5"
            >
              <div className="flex-1 truncate">
                <EditableText title={item.label} />
              </div>
            </div>
          ))}
        </div>
        <div className="w-52 bg-gray-200 rounded-lg p-2">
          {fileData.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center h-9 cursor-pointer rounded-lg mb-1 bg-gray-200 hover:bg-gray-100"
            >
              <div className="flex-1 p-1.5 truncate">
                <EditableText title={item.label} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-gray-200 rounded-lg p-2">
          <textarea
            defaultValue={'123213'}
            className="w-full h-full bg-inherit outline-none resize-none"
          />
        </div>
      </div>
    </div>
  )
}

export default Config
