import React from 'react'
import s from './SearchBar.module.scss'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
  return (
    <div className={s.searchBar}>
      <input type="search" placeholder='Search a recipe' />
      <FaSearch></FaSearch>
    </div>
  )
}

export default SearchBar