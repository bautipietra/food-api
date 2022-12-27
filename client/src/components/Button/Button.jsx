import React from 'react'
import s from './Button.module.css'
import { GiCook } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function SeeRecipesButton({ text, path, menu }) {
  return (
    <Link to={path} replace='false' id={s.seeRecipesButton} onClick={() => menu}>{text}<GiCook></GiCook></Link>
  )
}

export default SeeRecipesButton