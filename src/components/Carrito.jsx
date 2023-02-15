import React, { useReducer } from 'react'
import {shoppingReducer, shoppingInitialState } from '../reducers/reducer'

export default function Carrito() {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  const [products,cart] = state
  return (
    <div>
        <h1>carrito de compras</h1>
        <h2> carrito</h2>
        <h2> Producto</h2>
    </div>
  )
}
