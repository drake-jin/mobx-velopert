import React from 'react'
import './ShopItem.scss';

const ShopItem = ({ name, price, onPut }) => {
  console.log('ShopItem ... render')

  return (
    <div className="ShopItem" onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}원 </div>
    </div>
  )
}

export default ShopItem