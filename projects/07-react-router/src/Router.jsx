import { useEffect, useState } from 'react'
import { EVENTS } from './const'

export function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    // añadimos un Lisener que mirara si se añade el evento anterior y si es asi ejecutara la funcion
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    //Para ver la navegacion hacia a detras
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      // Eliminamos el evento anterior pasandole tanto el nombre del evento como la funcion
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  const Page = routes.find(({ path }) => path === currentPath)?.Component
  return Page ? <Page /> : <DefaultComponent />
}
