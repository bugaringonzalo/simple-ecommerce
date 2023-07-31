import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function CategoryItem({category}) {

    const {title, image, route} = category
    const navigate = useNavigate() 

    const navigateHandler = () => {
        navigate(route)
    }
  return (
    <div className='category-container' onClick={navigateHandler}>
        <div className="background-image"></div>
        <div className="category-body-container">

        </div>
    </div>
  )
}

export default CategoryItem