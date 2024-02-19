import { products as initialProducts } from './mooks/products.json'
import { Products, Header, Footer, Cart } from './components'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './context/cart'

function App() {
  const { filtersProducts } = useFilters()
  const filteredProducts = filtersProducts(initialProducts)
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
