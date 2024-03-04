import { useEffect, useState } from 'react'

// el useDebounce va a recibir el tipo por parametro
// se llamaria asi useDebounce('Hello', 500) no hace falta que pongamos el parametro que que lo hace internamente
export function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  // actualizamos el debounce cada vez que pasa el delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Esta funcion se ejecutara cuando el componente se desmonte o cuando termine la funcion
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

/*
0ms -> user type
  userEffect ... L7
150ms -> user type
  clear useEffect - L11
  userEffect ... L7
650ms -> setDebouncedValue - L8
  */
