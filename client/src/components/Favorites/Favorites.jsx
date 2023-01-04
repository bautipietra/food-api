import React from 'react'
import { reactLocalStorage } from 'reactjs-localstorage';
import s from './Favorites.module.css'
import { motion } from 'framer-motion'
import Loader from '../Loader/Loader';
import Card from '../Card/Card';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../actions';
import { useState } from 'react';

const Favorites = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const dispatch = useDispatch()
  let allRecipes = useSelector((state) => state.recipes)
  useEffect(() => {
    dispatch(getRecipes())
  }, [])

  const favoritesId = reactLocalStorage.getObject('favorites')
  let favorites
  if (!favoritesId.length) favorites = []
  else favorites = allRecipes.filter(r => favoritesId.includes(r.id.toString()))

  return (
    <motion.div className={s.flex}
      transition={{ delay: 0.2, duration: 0.5 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}>
      <div className={s.container}>
        {
          favorites.length ?
            <motion.div className={s.containerCards}
              transition={{ delay: 0.2, duration: 0.5 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}>
              {
                favorites.map(rec => <Card
                  id={rec.id}
                  key={rec.id}
                  name={rec.name}
                  image={rec.image}
                  summary={rec.summary}
                ></Card>)
              }
            </motion.div> :
            <div className={s.loader}>
              <Loader id={s.loader}></Loader>
            </div>
        }
      </div>
    </motion.div>
  )
}

export default Favorites