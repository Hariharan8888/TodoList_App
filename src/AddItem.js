import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'



const AddItem = ({newitem, setNewitem, handleSubmit}) => {
  const InputRef = useRef()
  return (
    <form
        className='addForm' onSubmit={handleSubmit}>
            <input 
                autoFocus
                ref={InputRef}
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newitem}
                onChange={(e) => setNewitem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={() => InputRef.current.focus()}
            >
               <FaPlus />
            </button>

    </form>
  )
}

export default AddItem