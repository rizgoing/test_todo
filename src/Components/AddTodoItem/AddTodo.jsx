import React, { useState } from 'react'


const AddTodo = ({ add }) => {

    const [todoItem, setTodoItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();  
        const val = todoItem.trim()
        val !== '' ?  add(todoItem) : console.log('');
         
        setTodoItem('')
    }

    const handleChange = (e) => {
        setTodoItem(e.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            autoFocus 
            required
            autoComplete="off"
            value={todoItem} 
            placeholder='Add todo..' 
            onChange={handleChange} />
        </form>
    )
}

export default AddTodo
