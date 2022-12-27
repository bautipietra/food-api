import React, { useState } from 'react'
import s from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { BsWindowSidebar } from 'react-icons/bs'

function SearchBar() {

  const search = (e) => {
    if (e.key === 'Enter') window.location.replace('/recipes?page=1&search=' + e.target.value)
  }

  return (
    <div className={s.searchBar}>
      <input type="search" autoComplete='false' placeholder='Search a recipe' onKeyDown={(e) => search(e)} />
      <FaSearch></FaSearch>
    </div>
  )
}

export default SearchBar