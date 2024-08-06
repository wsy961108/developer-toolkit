import Seach from '@renderer/components/Seach'
import Result from '@renderer/components/Result'

function App(): JSX.Element {
  window.api.shortCut('', 'CommandOrControl+L')
  return (
    <>
      <Seach />
      <Result />
    </>
  )
}

export default App
