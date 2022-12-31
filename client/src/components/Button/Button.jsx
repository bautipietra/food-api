import React from 'react'
import s from './Button.module.css'
import { GiCook } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function SeeRecipesButton({ text, path, menu, menuF }) {
  return (
    <Link to={path} replace='false' id={s.seeRecipesButton} onClick={() => { if (window.innerWidth < 1000 && menu) menuF() }}>{text}<GiCook></GiCook></Link>
  )
}

export default SeeRecipesButton