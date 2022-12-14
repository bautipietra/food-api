import React from 'react'
import s from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {

  const search = (e) => {
    if (e.key === 'Enter') console.log(e.target.value);
  }

  return (
    <div className={s.searchBar}>
      <input type="search" autoComplete='false' placeholder='Search a recipe' onKeyDown={(e) => search(e)} />
      <FaSearch></FaSearch>
    </div>
  )
}

export default SearchBar