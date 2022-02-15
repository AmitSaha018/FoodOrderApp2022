import React from 'react'
import CartContext from './cart-context'

const CartProvider = props => {
    const addItemtoCartHandler = item => { }
    
    const removeItemFromCartHandler = item => {}
    const cartContext = {
        item: [],
        totalAmount: 0,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler
    }
  return (
      <CartContext.Provider value={cartContext}>
          {props.children}
      </CartContext.Provider>
  )
}

export default CartProvider