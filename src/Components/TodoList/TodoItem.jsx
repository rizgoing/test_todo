import React, { useState, useEffect } from 'react'

const TodoItem = ({ todos, del }) => {
    const [toggle, setToggle] = useState(false);
    const [val, setVal] = useState('')

    // const toggleChange = (e) => {
    //     e.target.classList.toggle(toggle);

    // }
    useEffect(() => {
        toggle ? setVal('completed') : setVal(null);
    })

    const todoItem = 
      todos.length ? (
        todos.map((i) => {
            return(
            <li key={i.id} >
                <span 
                  onClick={(e) => {
                  i.checked = !i.checked;
                  e.target.classList.toggle('completed');
                  
                  
                  // toggleChange(e)              
                  console.log(i, toggle);
                
                    }}
                  className={val}>{i.text}
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
