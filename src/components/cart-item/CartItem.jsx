import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CartItem({category}) {

    const {title, image, route} = category
    const navigate = useNavigate() 

    const navigateHandler = () => {
        navigate(route)
    }

  return (
    <div className='cart-item-container' onClick={navigateHandler}>
        
            <div className="item-details" style={{backgroundImage: `url(${image})` }}>
                <Link to='/shop'>
                    <h2>{title}</h2>
                    <p>Shop Now !</p>
                </Link>
            </div>
    </div>
  )
}

export default CartItem