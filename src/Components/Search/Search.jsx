import React from 'react'

const Search = ({ search }) => {

    return (
        <div>
            <input type="text" 
            placeholder="Search todo.."
            autoComplete="off"
            onChange={(e) => search(e.target.value)} />
        </div>
    )
}

export default Search
