import React from 'react'

const TodoItem = ({ todos, del, checked }) => {

    const todoItem = 
      todos.length ? (
        todos.map((i, index) => {
            return(
            <li key={i.id} >
                <span 
                  className={i.checked ? 'completed' : ''}  
                  onClick={() => {
                    checked(index)
        
                    }}
                  >{i.text}
                </span>
                <button onClick={() => del(i.id)} className='delete-todo'>x</button>
           </li>
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
