import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useEffect, useRef, useState } from 'react'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => {
    // con el event podemos obtener los datos del formulario al hacer un onSubmit
    event.preventDefault() //para que no se recarge la pagina

    //opcion 1 con useRef
    //const value = inputRef.current.value

    //opcion 2 cogiendo los datos del form
    //const fields = new FormData(event.target)
    //const query = fields.get('query')

    //si hubiera varios valores en el formulario
    //const { query } = Object.fromEntries(new window.FormData(event.target))

    //controlando estados
    console.log({ search })
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className="page">
      <h1>Buscador de peliculas</h1>
      <header>
        <form onSubmit={handleSubmit} className="form">
          <input
            onChange={handleChange}
            name="query"
            placeholder="Avenger, Star wars, The Matrix..."
            type="text"
            value={search}
          />
          <button type="sumbit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
