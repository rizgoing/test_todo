import React, { useState } from 'react'
import AddTodoListForm from '../AddTodoListForm/AddTodoListForm';
import { Link } from 'react-router-dom';


const TodoLists = () => {
    
    const [list, setList] = useState([]);
    const [todos, setTodos] = useState([])

    const addListItem = (e) => {
        
            setList([...list, {
                listname: e,
                id: Math.random(),
                todos: [todos],
            }])
        
    }

    const listItem = list.length ? (
        list.map((i) => {
            return (
            <a href={`/list/${i.id}`} key={i.id}> <li > <span>{i.listname}</span> <span> (0/{i.todos.length}) </span> </li> </a>
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
