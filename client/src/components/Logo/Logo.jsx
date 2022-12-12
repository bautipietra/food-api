import React from 'react'
import { Link } from 'react-router-dom'
import { GiCook } from 'react-icons/gi'
import s from './Logo.module.scss'

function Logo({ color }) {
  return (

    <Link to={''} className={s.logo}>
      <GiCook size={'40px'} fill={color}></GiCook>
      <span style={{ color: color }}>Tasty</span>
    </Link>
  )
}

export default Logo