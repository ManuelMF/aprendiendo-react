import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_ENVENT = 'pushstate'

function navigate(href) {
  window.history.pushState({}, '', href)

  // Crear un evento personalizado para avisar que cambiamos de url
  const navigationEvent = new Event(NAVIGATION_ENVENT)
  // Lo lanzamos
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un react router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
    </>
  )
}
function AboutPage() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <img
          src="https://media.licdn.com/dms/image/D4D03AQFRqaawWza3Qw/profile-displayphoto-shrink_200_200/0/1708110878486?e=1714003200&v=beta&t=7FS3-av3ePN51ikEf-AIQfDbFryHNENj7Kvy3io0Yp4"
          alt="Foto de perfil"
        />
        <p>Hola! Me llamo Manuel y estoy creando un clon de React Router.</p>
        <button onClick={() => navigate('/')}>Ir al home</button>
      </div>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    // añadimos un Lisener que mirara si se añade el evento anterior y si es asi ejecutara la funcion
    window.addEventListener(NAVIGATION_ENVENT, onLocationChange)

    return () => {
      // Eliminamos el evento anterior pasandole tanto el nombre del evento como la funcion
      window.removeEventListener(NAVIGATION_ENVENT, onLocationChange)
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
