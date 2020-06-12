import React, { useState } from 'react'

const AddTodoListForm = ({ add }) => {
    
    const [itemName, setItemName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        add(itemName);
        setItemName('');
    }

    return (
        <form onSubmit={handleSubmit} className="add-lists-form">
            <input 
            className="input-list"
            type="text" 
            autoFocus 
            autoComplete="off"
            value={itemName} 
            placeholder='New list...' 
            onChange={(e) => setItemName(e.target.value) } /><br/>
            <input type="submit" value="Create" className="input-submit" />
        </form>
    )
}

export default AddTodoListForm
