import React from 'react'
import s from './Button.module.scss'
import { GiCook } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function SeeRecipesButton({ text, path }) {
  return (
    <Link to={path} id={s.seeRecipesButton}>{text}<GiCook></GiCook></Link>
  )
}

export default SeeRecipesButton