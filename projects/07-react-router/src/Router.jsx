import { useEffect, useState, Children } from 'react'
import { EVENTS } from './const'
import Page404 from './pages/404'
import { match } from 'path-to-regexp'

export function Router({
  children,
  routes = [],
  defaultComponent: DefaultComponent = Page404,
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

  let routeParams = {}

  // add routes frm children <Route /> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    //Children es una utilidad que se importa de react y podemos hacer count only toArray
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    // hemos usado path-to-regexp
    // para poder detectar rutas dinámicas como por ejemplo
    // /search/:query <-- :query es una ruta dinamica
    const matcherUrl = match(path, { decode: decodeURIComponent }) //aqui se le pasa el search/:query
    const matched = matcherUrl(currentPath) // aqui search/javascript
    if (!matched) return false

    /*
    guardar los parámetros de la url que eran dinámicos
    y que hemos extraído con path-to-regexp
    por ejemplo, si la ruta es /seatch/:query
    y la url es /search/javascript
    matched.params.query === 'javascript'
    */
    routeParams = matched.params // { query: 'javascript' } // /search/javascript
    return true
  })?.Component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent />
}
