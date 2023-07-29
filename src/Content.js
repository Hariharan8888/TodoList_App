import React from 'react'
import ItemsList from './ItemsList'


const Content = ({items, handlechange, handleDelete}) => {
  return (
    <>
      {items.length ?(
        <ItemsList 
        items={items}
        handlechange={handlechange}
        handleDelete={handleDelete}
        />
        ) : <p> Your list is empty!!!!</p>
  }
    </>
  )
}




export default Content