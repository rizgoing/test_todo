import React, { useState, useEffect } from 'react'
import AddTodo from '../AddTodoItem/AddTodo';
import Search from '../Search/Search';
import TodoItem from './TodoItem';

const TodoList = () => {
   
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');

    const addTodo = (e) => {

        setTodos([...todos, {
            text: e,
            id: Math.random(),
            checked:false,
        }])
    }

    
    const deleteTodo = (id) => {

        const todosDel = todos.filter((todo) => {
            return (
                todo.id !== id                
            )
        } )
        setTodos(todosDel)
        console.log('id:', id);
    
    }

    const handleSearch = e => setSearch(e);
      
    const searchedTodos = !search
    ? todos
    : todos.filter((todo) => {
        return todo.text.toLowerCase().includes(search.toLowerCase());
      });

    return (
        <div className="todo-list-wrapper">
            <Search search={handleSearch} />
              <ul className="todo-list">
                <TodoItem del={deleteTodo} todos={searchedTodos} />
              </ul>
            <AddTodo add={addTodo} />
        </div>
    )
}

export default TodoList
