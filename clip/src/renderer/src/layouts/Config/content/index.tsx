import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import styles from './index.module.scss'
import { useRef } from 'react'

function Content(): JSX.Element {
  const data = useLoaderData() as ContentType
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const submit = useSubmit()

  return (
    <Form method="PUT" className={styles.container} key={data.id}>
      <textarea
        ref={contentRef}
        name="content"
        defaultValue={data.content}
        onChange={(e) => submit(e.target.form)}
      />
    </Form>
  )
}

export default Content
