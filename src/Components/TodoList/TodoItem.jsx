import React from 'react'

const TodoItem = ({ todos, del }) => {

    const todoItem = 
    todos.length ? (
        todos.map((i) => {
            return(
            <li key={i.id}><span onClick={(e) => {
                e.target.classList.toggle("completed");
                i.checked = !i.checked;
           }}>{i.text}</span>
           <button onClick={() => del(i.id)} className='delete-todo'>x</button></li>
            )
        })
    ) : (<p>Nothing to do yet..</p>)

    return (
        <div>
            {todoItem}
        </div>
    )
}

export default TodoItem
