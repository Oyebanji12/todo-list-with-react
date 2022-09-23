import React from 'react'
import {FiTrash2} from "react-icons/fi"


const TodoList = ({items, setItems}) => {

    function deleteItem(id) {
        const newArray=(items.filter(item => item.id !== id))
        setItems(newArray)
        
    }

   
   
    
  return (
    <div>
        <div>
            <ul>
            {items.map((item, i)=>{
                return(
                <li key={i} className='item-list'>
                 <div className='flex'>   {item.value}  <button onClick={()=> deleteItem(item.id)}  className='item-icon'><FiTrash2 /></button> </div>
                </li>
                )

            })}
            </ul>
            
        </div>
        

    </div>
  )
}

export default TodoList