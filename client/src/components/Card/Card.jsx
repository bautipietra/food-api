import React from 'react'
import s from './Card.module.scss'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <Link className={s.card}>
      <div className={s.cardImage}>
        <img src="https://spoonacular.com/recipeImages/794349-312x231.jpg" alt="" />
      </div>
      <h6>Homemade Garlic and Basil French Fries</h6>
    </Link>
  )
}

export default Card