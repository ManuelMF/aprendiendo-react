import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'
import { useStore } from './hook/useStoree'

function App () {
  const { fromLanguage, setFromLanguages } = useStore()
  console.log(fromLanguage)
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
