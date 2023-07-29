import React from 'react'
import { FaTrash } from "react-icons/fa";

const ListItems = ({item, handlechange, handleDelete}) => {
  return (
    <li  className='item' key={item.id}>
       
    <input 
    type = "checkbox"
    onChange={() => handlechange(item.id)}
    checked = {item.checked}
    />

    <label
    style={item.checked ? {textDecoration: "line-through"} : null}
    onDoubleClick={() => handlechange(item.id)}>{item.item}</label>
   
    <FaTrash
    role='button' 
    onClick={() => handleDelete(item.id)}
    tabIndex="0"
    aria-label={`Delete ${item.item}`}
    />
                
  </li>
  )
}

export default ListItems