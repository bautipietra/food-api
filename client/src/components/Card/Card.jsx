import React from 'react'
import s from './Card.module.scss'
import { Link } from 'react-router-dom'
import { TfiAlarmClock } from 'react-icons/tfi'
import { motion } from 'framer-motion'

const Card = ({ id, name, image, diets, time }) => {

  return (
    <Link to={`/recipe/${id}`} className={s.card}>
      <div className={s.cardImage}>
        <img src={image} alt={name} />
      </div>
      <h6>{name}</h6>
      <div className={s.cardInfo}>
        <div className={s.cardInfoDiets}>
          <p>{diets.join(', ')}</p>
        </div>
        <div className={s.cardInfoTime}>
          <img src="https://spoonacular.com/application/frontend/images/badges/fast.svg" alt="" size='31.5px' />
          <span>{time} min</span>
        </div>
      </div>
    </Link>
  )
}

export default Card