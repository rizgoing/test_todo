import React, { useState, useEffect } from 'react'
import AddTodoListForm from '../AddTodoListForm/AddTodoListForm';
import {  Link } from "react-router-dom";

const TodoLists = () => {
    
    const [list, setList] = useState([]);
    
    const addListItem = (e) => {
         
        setList([...list, {
            id: Math.random(),
            name: e,
            todos: [],
        } ])

    }

    const listItem = list.length ? (
        list.map((i) => {
            return (
            <Link to={`/lists/${i.id}`} key={i.id}> <li > <span>{i.name}</span> <span> ({i.todos.checked}/{i.todos.length}) </span> </li> </Link>
            );
        })
    ) : (<p>Add some todos lists..</p>);
    
      
    return (
        
        <div className='todo-lists-wrapper'>
            <ul className="todo-lists">
            
            {listItem}
            
            </ul>
            <AddTodoListForm add={addListItem} />
        </div>
        
    )
}

export default TodoLists
