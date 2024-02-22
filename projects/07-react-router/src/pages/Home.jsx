import { navigate } from '../Link.jsx'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un react router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
    </>
  )
}
