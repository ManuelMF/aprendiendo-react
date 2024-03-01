import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hook/useStore'

function App () {
  const { fromLanguage, setFromLanguages } = useStore()

  return (
    <div className='App'>
      <h1>Google Translate</h1>
      <button onClick={() => {
        setFromLanguages('es')
      }}
      >Cambiar a Español
      </button>
    </div>
  )
}

export default App
