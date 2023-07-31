import React from 'react'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'
import Card from '../../components/card/Card'


function Category() {
    
    const {category} = useParams()
    const {shopData} = useContext(CategoriesContext)
    const [products, setProducts] = useState ([])

    useEffect (() => {
        let filteredProducts = shopData?.filter((prod) => prod.category === category)

        setProducts(filteredProducts)
    }, [])
  
    return (
    <>
        <h2 className="category-title">{category}</h2>
        <div className="category-product-container">
            {products && products.map((product) => {
                return (
                    <Card key={product.id} product={product} />
                )
            })}
        </div>
    </>
    
  )
}

export default Category