import React, { useState } from 'react'

const AddTodo = ({ add }) => {

    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        add(todo);
        setTodo('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            autoFocus 
            autoComplete="off"
            value={todo} 
            placeholder='Add todo..' 
            onChange={(e) => setTodo(e.target.value) } />
        </form>
    )
}

export default AddTodo
