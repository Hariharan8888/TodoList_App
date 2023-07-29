import Header from "./Header";
import { useState, useEffect } from 'react'
import Footer from "./Footer";
import React from 'react';
import Content from "./Content";
import AddItem from "./AddItem";
import apiRequest from "./ApiRequest";

function App() {
  const API_URL = 'http://localhost:3500/items'
  const [items, setItems] = useState([])
  const[newitem , setNewitem] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  const fetchItems = async() => {
    try{
      const response = await fetch(API_URL)
      if(!response.ok) throw Error("Data Not Recieved")
      const listItems = await response.json()
      setItems(listItems)
      setFetchError(null)
    }catch(err){
      setFetchError(err.message)
    }finally{
      setIsLoading(false)
    }

  }
  setTimeout(() => {
    (async() => await fetchItems())()
  }, 2000)
  },[])

const addItem = async (item) => {
  const id = items.length ? items[items.length - 1].id+1 : 1;
  const addNewItem = {id, checked:false, item}
  const listItems = [...items, addNewItem]
  setItems(listItems)

  const postOptions = {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify(addNewItem)
  }

  const result = await apiRequest(API_URL, postOptions)
  if(result) setFetchError(result)
 
}


const handlechange = async (id) => {
  const listItems = items.map(item =>
    item.id===id ? {...item, checked:!item.checked} : item)
    setItems(listItems)

    const myItem = listItems.filter(item => item.id===id)
    const UpdateOptions = {
      method: 'PATCH',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({checked : myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, UpdateOptions)
    if(result) setFetchError(result)
   
    
}

const handleDelete = async (id) => {
  const listItems = items.filter(item =>
    item.id!==id)
    setItems(listItems)

    const DeleteOptions = { method: 'DELETE'}

    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, DeleteOptions)
    if(result) setFetchError(result)

  }
 
const handleSubmit = (e) => {
  e.preventDefault()
  if(!newitem) return
  console.log(newitem)
  addItem(newitem)
  setNewitem(' ')
}

  return (
    <div className = "App">
      <Header title= "To do List" />

      <AddItem 
        newitem={newitem}
        setNewitem={setNewitem}
        handleSubmit={handleSubmit}
      />

      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p>{`Error : ${fetchError}`}</p>}
      {!isLoading && !fetchError &&<Content 
        items={items}
        handlechange={handlechange}
        handleDelete={handleDelete}
       />}
       </main>

      <Footer
        length = {items.length}
      />
      
    </div>
  )
}


export default App;
