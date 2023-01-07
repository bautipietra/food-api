import React, { useState } from 'react'
import s from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function SearchBar({ menu }) {

  const navigate = useNavigate();
  const search = (e) => {
    if (e.key === 'Enter') {
      navigate('/recipes?page=1&search=' + e.target.value)
      e.target.value = ''
      if (window.innerWidth < 1000) {
        menu()
      }
    }
  }

  const iconSearch = () => {
    const value = document.querySelector('#search').value
    navigate('/recipes?page=1&search=' + value)
    document.querySelector('#search').value = ''
    if (window.innerWidth < 1000) {
      menu()
    }
  }

  return (
    <div className={s.searchBar}>
      <input type="search" autoComplete='false' placeholder='Search a recipe' id='search' onKeyDown={(e) => search(e)} />
      <FaSearch cursor={'pointer'} onClick={() => { iconSearch() }}></FaSearch>
    </div>
  )
}

export default SearchBar