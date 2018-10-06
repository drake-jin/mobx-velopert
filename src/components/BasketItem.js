import React from 'react'
import './BasketItem.scss'

const BasketItem = ({ item, onTake }) => {
  console.log('BasketItem ... render')

  return (
    <div className="BasketItem">
      <div className="name">{item.name}</div>
      <div className="price">{item.price}</div>
      <div className="count">{item.count}</div>
      <div className="return" onClick={() => onTake(item.name)}>갖다놓기</div>
    </div>
  )
}

export default BasketItem