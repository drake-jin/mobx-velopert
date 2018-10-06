import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItemList'
import BasketItemList from './BasketItemList'

const SuperMarket = () => {
  console.log('SuperMarket ... render')
  return <SuperMarketTemplate items={<ShopItemList />} basket={<BasketItemList />} />
}

export default SuperMarket
