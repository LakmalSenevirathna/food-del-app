import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

function FoodItem({id,name,price,description,image}) {

  const[itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-des">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
