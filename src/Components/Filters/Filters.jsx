import React from 'react'

const Filters = ({ filter }) => {
    return (
        <div className="filters">
            <label htmlFor="all">
                <input 
                  type="radio" 
                  defaultChecked
                  id="all" 
                  name="filter" 
                  value="all" 
                  onClick={(e) => filter(e)} />All</label>
            <label htmlFor="undone">
                <input 
                  type="radio" 
                  id="undone" 
                  name="filter" 
                  value="undone" 
                  onClick={(e) => filter(e)}/>Undone</label>
        </div>
    )
}

export default Filters
