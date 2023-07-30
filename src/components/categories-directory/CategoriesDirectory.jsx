import React from 'react'
import CategoryItem from '../category-item/CategoryItem'

const categories = [
  {
    id: 1,
    title: 'Electronics',
    image : 'https://hexgn.com/wp-content/uploads/2019/07/tech-1.jpg',
    route: '/shop/electronics'
  },
  {
    id: 2,
    title: 'Jewelery',
    image : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/unique-jewelry-1587136757.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    route: '/shop/jewelery'
  },
  {
    id: 3,
    title: 'Men\'s Clothing',
    image: 'https://i.ibb.co/cvpntL1/hats.png',
    route: '/shop/mens-clothing'
  },
  {
    id: 4,
    title: 'Women\'s Clothing',
    image: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: '/shop/womens-clothing'
  }
]

function Directory() {
  return (
    <div className='categories-container'>
      {categories.map((category) => {
        return (
          <>
            <CategoryItem category={category}/>
          </>
        )
      })}
    </div>
  )
}

export default Directory