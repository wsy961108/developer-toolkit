import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import styles from './FragmentContent.module.scss'

export default function FragmentContent(): JSX.Element {
  const submit = useSubmit()
  const data = useLoaderData()
  console.log(data, 'FragmentContent.content')
  return (
    <Form method="PUT" className={styles.content}>
      <textarea
        name="content"
        value={data.content}
        className="bg-inherit h-full w-full outline-none"
        onChange={(e) => submit(e.target.form)}
      />
    </Form>
  )
}
