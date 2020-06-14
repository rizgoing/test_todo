import React, { useState } from 'react'
import AddTodo from '../AddTodoItem/AddTodo';
import Search from '../Search/Search';
import TodoItem from './TodoItem';
import Filters from '../Filters/Filters';


const TodoList = () => {
   
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(false);


    const addTodo = (e) => {
        setTodos([...todos, {
            todo: e,
            id: Math.random(),
            checked: false,
        }])
    }

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].checked ? newTodos[index].checked = false : newTodos[index].checked = true;
        setTodos(newTodos);
    };

    const deleteTodo = (id) => {

        const todosDel = todos.filter((todo) => {
            return (
                todo.id !== id                
            )
        } )
        
        setTodos(todosDel);
    
    }

    const handleSearch = e => setSearch(e);
      
    const searchedTodos = !search
    ? todos
    : todos.filter((todo) => {
        return todo.todo.toLowerCase().includes(search.toLowerCase());
    });

    const handleFilter = (e) => {
        if (e.target.value === 'all') {
            setFilter(false);
        } else setFilter(true);
        
    }
    
    const filteredItems = filter
           ? searchedTodos.filter((todo) => {
             return todo.checked === false 
    }) : searchedTodos
        
    return (
        <div className="todo-list-wrapper">
            <Search search={handleSearch} />
            <Filters filter={handleFilter}/>
              <ul className="todo-list">
                <TodoItem del={deleteTodo} todos={filteredItems}  checked={completeTodo} />
              </ul>
            <AddTodo add={addTodo} />
        </div>
    )
}

export default TodoList
