import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../../actions'
import Card from '../Card/Card'
import s from './Home.module.scss'
import { motion } from 'framer-motion'

const Home = () => {

  const dispatch = useDispatch()
  const allRecipes = useSelector((state) => state.recipes)

  useEffect(() => {
    dispatch(getRecipes())
  }, [])


  return (
    <motion.div
      transition={{ delay: 0.2, duration: 0.5 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}>
      <div className={s.container}>
        {
          allRecipes.length ?
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
                  diets={rec.diets}
                  time={rec.readyInMinutes}
                ></Card>)
              }
            </div> :
            <motion.div className={s.ldsRing}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <div></div><div></div><div></div><div></div>
            </motion.div>
        }
      </div>
    </motion.div>
  )
}

export default Home