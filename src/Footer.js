import React from 'react'

const footer =({length})=> {
    return (
      <footer>
        {length} List {length === 1 || length === 0 ? "item" : "items"}
      </footer>
    )
  }


export default footer