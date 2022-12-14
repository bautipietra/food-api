import React from 'react'
import { Link } from 'react-router-dom'
import { GiCook } from 'react-icons/gi'
import s from './Logo.module.css'

function Logo({ color, menu }) {
  return (

    <Link to={''} className={s.logo} onClick={menu}>
      <GiCook size={'40px'} fill={color}></GiCook>
      <span style={{ color: color }}>Tasty</span>
    </Link>
  )
}

export default Logo