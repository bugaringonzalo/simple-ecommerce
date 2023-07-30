import React from 'react'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'



function Category() {
    
    const {category} = useParams()
    const {shopData} = useContext(CategoriesContext)
    const [proucts, setProducts] = useState ([])

    useEffect (() => {
        let filteredProducts = shopData?.filter((prod) => prod.category === category)

        setProducts(filteredProducts)
    }, [])
  
    return (
    <>

    </>
    
  )
}

export default Category