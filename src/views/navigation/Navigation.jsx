import React from 'react'
import {NavLink, NavigationContainer, NavLinks} from './navigation.styles'
import CartIcon from '../../components/cart-icon/CartIcon'

function NavBar() {
  return (
    <>
        <NavigationContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                <CartIcon />
            </NavLinks>
        </NavigationContainer>
    </>
  )
}

export default NavBar