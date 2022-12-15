import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../../actions'
import Card from '../Card/Card'
import s from './Home.module.scss'

const Home = () => {

  const dispatch = useDispatch()
  const allRecipes = useSelector((state) => state.recipes)

  useEffect(() => {
    dispatch(getRecipes())
  }, [])


  return (
    <div>
      <div className={s.container}>
        <div className={s.containerCards}>
          {
            allRecipes.map(rec => <Card
              id={rec.id}
              key={rec.id}
              name={rec.name}
              image={rec.image}
              vegetarian={rec.vegetarian}
              vegan={rec.vegan}
              glutenFree={rec.glutenFree}
              dairyFree={rec.dairyFree}
              time={rec.readyInMinutes}
            ></Card>)
          }
        </div>
      </div>
    </div>
  )
}

export default Home