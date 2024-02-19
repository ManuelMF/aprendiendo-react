import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function useCart() {
  const { cart, addToCart, cleanCart, removeFromCart } = useContext(CartContext)

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }
  return { cart, addToCart, cleanCart, checkProductInCart, removeFromCart }
}
