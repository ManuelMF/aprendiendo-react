import { useState } from 'react'
import { products as initialProducts } from './mooks/products.json'
import { Products, Header, Footer } from './components'
import { useFilters } from './hooks/useFilters'

function App() {
  const [products] = useState(initialProducts)
  const { filtersProducts } = useFilters()
  const filteredProducts = filtersProducts(products)
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
