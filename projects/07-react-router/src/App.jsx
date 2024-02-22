import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './const'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

function App() {
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

  return (
    <main>
      <h1>React Router</h1>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
