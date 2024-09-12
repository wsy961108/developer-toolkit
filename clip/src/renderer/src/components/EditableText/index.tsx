import { useState } from 'react'
interface Props {
  data: Partial<ContentType & CategoryType>
  handleTitle?: (e: HTMLInputElement) => void
}

export default function EditableText(props: Props): JSX.Element {
  const title = props.data.title || props.data.name || ''
  const [isUpdataState, setIsUpdataState] = useState<boolean>(false)

  const handleIsUpdataState = (state: boolean): void => {
    setIsUpdataState(state)
  }

  if (isUpdataState) {
    return (
      <input
        name="title"
        key={props.data.id}
        className="w-full h-full outline-none bg-transparent"
        defaultValue={title}
        autoFocus
        onChange={(e) => props.handleTitle && props.handleTitle(e.target)}
        onBlur={() => handleIsUpdataState(false)}
        onKeyDown={(e) => e.code === 'Enter' && handleIsUpdataState(false)}
      />
    )
  } else {
    return (
      <div className="w-full h-6 flex" key={props.data.id}>
        <div
          className="w-full h-full truncate bg-transparent"
          onDoubleClick={() => handleIsUpdataState(true)}
        >
          {title}
        </div>
      </div>
    )
  }
}
