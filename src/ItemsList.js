import React from 'react'
import ListItems from './ListItems'


const ItemsList = ({items, handlechange, handleDelete}) => {
  return (
    <ul>
    {items.map( item => (
        <ListItems 
            item={item}
            key={item.id}
            handlechange={handlechange}
            handleDelete={handleDelete}
         />
    ) )}
  </ul>
  )
}

export default ItemsList