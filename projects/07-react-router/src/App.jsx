import './App.css'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

import { Router } from './Router.jsx'

const appRoutes = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
]

function App() {
  return (
    <main>
      <h1>React Router</h1>
      <Router routes={appRoutes} />
    </main>
  )
}

export default App
