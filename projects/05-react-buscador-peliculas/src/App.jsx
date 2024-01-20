import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'just-debounce-it'

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
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search })
    }, 500),
    [getMovies]
  )
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
    getMovies(search)
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
    debouncedGetMovies(event.target.value)
  }

  const handleSort = () => {
    setSort(!sort)
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
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="sumbit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
