import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

export function Products({ products, addToCart }) {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
/**
 * Al separar en el li con div podemos separarlos
 * y añadirle espacio con un gap
 */
