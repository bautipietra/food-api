import React from 'react'
import s from './Card.module.scss'
import { Link } from 'react-router-dom'
import { TfiAlarmClock } from 'react-icons/tfi'
import { HiHeart } from 'react-icons/hi'

const Card = ({ id, name, image, vegetarian, vegan, glutenFree, dairyFree, time }) => {
  return (
    <Link to={`/${id}`} className={s.card}>
      <div className={s.cardImage}>
        <img src={image} alt={name} />
      </div>
      <h6>{name}</h6>
      <div className={s.cardInfo}>
        <div className={s.cardInfoDiets}>
          <span>{vegetarian && <img src={'https://spoonacular.com/application/frontend/images/badges/vegetarian.svg'} alt={'vegetarian'} title={'vegetarian'}></img>}</span>
          <span>{vegan && <img src={'https://spoonacular.com/application/frontend/images/badges/vegan.svg'} alt={'vegan'} title={'vegan'}></img>}</span>
          <span>{glutenFree && <img src={'https://spoonacular.com/application/frontend/images/badges/gluten-free.svg'} alt={'glutenFree'} title={'glutenFree'}></img>}</span>
          <span>{dairyFree && <img src={'https://spoonacular.com/application/frontend/images/badges/dairy-free.svg'} alt={'dairyFree'} title={'dairyFree'}></img>}</span>
        </div>
        <div className={s.cardInfoTime}>
          <TfiAlarmClock></TfiAlarmClock>
          <span>{time} min</span>
        </div>
      </div>
    </Link>
  )
}

export default Card