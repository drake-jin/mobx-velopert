import React from 'react'
import BasketItem from './BasketItem'
import { inject, observer } from 'mobx-react'

const BasketItemList = ({ items, onTake }) => {
  const itemList = items.map(item => (
    <BasketItem
      key={item.name}
      onTake={onTake}
      item={item}
    />
  ))
  console.log('BasketItemList ... render')

  return (
    <div>{itemList}</div>
  )
}

export default inject(({ market }) => ({
  items: market.selectedItems,
  onTake: market.take,
}))(observer(BasketItemList))
