import { useContext, useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FilterContext } from './contex/filters'

function useFilters() {
  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || filters.category === product.category)
      )
    })
  }

  return { filterProducts, setFilters }
}

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
