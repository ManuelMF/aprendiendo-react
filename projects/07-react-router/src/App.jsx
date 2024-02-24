import './App.css'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import SearchPage from './pages/Search.jsx'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage,
  },
]

function App() {
  return (
    <main>
      <Router routes={appRoutes}>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
      </Router>
    </main>
  )
}

export default App
