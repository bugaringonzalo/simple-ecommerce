import React from 'react'
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles'

function CartIcon() {
  return (
    <CartIconContainer>
        <ShoppingIcon />
        <ItemCount>0</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon