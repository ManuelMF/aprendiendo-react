import { createContext, useReducer, useState } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cart'
// crear contexto
export const CartContext = createContext()

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    })

  const removeFromCart = (product) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    })

  const cleanCart = () =>
    dispatch({
      type: 'CLEAN_CART',
    })

  return { state, addToCart, removeFromCart, cleanCart }
}

// crear provider
// la dependencia de user React Context
// es Mínima
export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, cleanCart } = useCartReducer()
  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, cleanCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
