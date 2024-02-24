import { Suspense, lazy } from 'react' // importar de forma dinamica para que no haya problemas de rendimiento
import './App.css'
const HomePage = lazy(() => import('./pages/Home.jsx'))
const AboutPage = lazy(() => import('./pages/About.jsx')) // import dinamico
const SearchPage = lazy(() => import('./pages/Search.jsx'))

import { Router } from './Router.jsx' // import estático
import { Route } from './Route.jsx'
// para los imports dinamicos tenemos que envolver el elemento con un Suspense ya que esta en estado suspendido
const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage,
  },
]

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
