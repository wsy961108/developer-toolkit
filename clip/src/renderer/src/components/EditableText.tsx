import { useState } from 'react'
interface Props {
  title: string
  handleTitle?: (e: string) => void
  handleDelete?: (e: string) => void
}
export default function EditableText(props: Props): JSX.Element {
  const [isUpdataState, setIsUpdataState] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(props.title)

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
    props.handleTitle && props.handleTitle(e.target.value)
  }
  const handleDelete = (): void => props.handleDelete && props.handleDelete('')

  if (isUpdataState) {
    return (
      <input
        className="w-full h-full outline-none bg-transparent"
        value={title}
        autoFocus
        onChange={handleTitle}
        onBlur={() => setIsUpdataState(false)}
      />
    )
  } else {
    return (
      <div className="w-full h-6 flex">
        <div
          className="w-full h-full truncate bg-transparent"
          onDoubleClick={() => console.log('first', setIsUpdataState(true))}
        >
          {title}
        </div>
        <div className="cursor-pointer" onClick={() => handleDelete()}>
          删除
        </div>
      </div>
    )
  }
}
