import React, { useState } from 'react'
import TodoList from './TodoList'
import {AiOutlinePlus} from "react-icons/ai"



const Form = () => {
    const [newItem, setNewItem]= useState("")

    // array to hold all the new item
    const [items, setItems]= useState([])

    const onInputChange=(e)=>{
        setNewItem(e.target.value)
        console.log(e.target.value)
    }

    
    // function to add item when the button is clicked
    const addItem=()=>{
        console.log(newItem)
        if(newItem === ""){
            alert('enter an item')
            return;
        }

        // assigned the object properties to item
        const item={
            id: Math.floor(Math.random() * 10000),
            value:newItem
        }
        // to input the item into the array
        setItems(oldList=>[...oldList, item])

        setNewItem('')
        console.log(items)


    }



    
    
  return (
    <div>

         
            <input type="text"  value={newItem} onChange={onInputChange} placeholder='Add your new todo' className='input-field' />
            
            <button onClick={addItem} className= "btn" ><AiOutlinePlus /></button>
            
                <TodoList items={items} setItems={setItems} />
    </div>
  )
}

export default Form