import React from 'react'
import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="Search">
      <input
        className="SearchInput"
        type="text"
        placeholder="Search..."
      />
      <button>&#x1F50E;&#xFE0E;</button>
    </div>
  )
}

export default Searchbar