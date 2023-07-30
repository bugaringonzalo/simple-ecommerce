import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function CategoryItem({category}) {

    const {title, image, route} = category
    const navigate = useNavigate() 

    const navigateHandler = () => {
        navigate(route)
    }
  return (
    <div>
        <div className="item-details" style={{backgroundImage: `url(${image})` }}>
                <Link to='/shop'>
                    <h2>{title}</h2>
                    <p>Shop Now !</p>
                </Link>
        </div>
    </div>
  )
}

export default CategoryItem