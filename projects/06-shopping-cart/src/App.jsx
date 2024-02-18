import { products as initialProducts } from './mooks/products.json'
import { Products, Header } from './components'
import { useState } from 'react'

function useFilters() {
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 })

  const filtersProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  return { filtersProducts, setFilters }
}

function App() {
  const [products] = useState(initialProducts)

  const {filteredProducts setFilters} = useFilters()
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
