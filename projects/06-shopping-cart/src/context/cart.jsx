import { createContext, useState } from 'react'

// crear contexto
export const CartContext = createContext()

// crear provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart) // crea copia exacta de los arr
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    setCart((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const cleanCart = () => {
    setCart([])
  }

  const RemoveFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, cleanCart, RemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
