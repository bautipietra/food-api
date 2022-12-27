import React from 'react'
import s from './Card.module.scss'
import { Link } from 'react-router-dom'
import { TfiAlarmClock } from 'react-icons/tfi'
import { motion } from 'framer-motion'

const Card = ({ id, name, image, vegetarian, vegan, glutenFree, dairyFree, diets, time }) => {
  return (
    <Link to={`/recipe/${id}`} className={s.card}>
      <div className={s.cardImage}>
        <img src={image} alt={name} />
      </div>
      <h6>{name}</h6>
      <div className={s.cardInfo}>
        <div className={s.cardInfoDiets}>
          {vegetarian && <img src={'https://spoonacular.com/application/frontend/images/badges/vegetarian.svg'} alt={'vegetarian'} title={'vegetarian'}></img>}
          {vegan && <img src={'https://spoonacular.com/application/frontend/images/badges/vegan.svg'} alt={'vegan'} title={'vegan'}></img>}
          {glutenFree && <img src={'https://spoonacular.com/application/frontend/images/badges/gluten-free.svg'} alt={'glutenFree'} title={'gluten free'}></img>}
          {dairyFree && <img src={'https://spoonacular.com/application/frontend/images/badges/dairy-free.svg'} alt={'dairyFree'} title={'dairy free'}></img>}
          {diets.includes('pescatarian') && <img src={'https://spoonacular.com/application/frontend/images/badges/pescetarian.svg'} alt={'pescetarian'} title={'pescetarian'}></img>}
          {diets.includes('primal') && <img src={'https://spoonacular.com/application/frontend/images/badges/primal.svg'} alt={'primal'} title={'primal'}></img>}
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