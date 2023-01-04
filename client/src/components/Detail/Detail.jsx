import React from 'react'
import s from './Detail.module.css'
import { useParams, useLocation } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearRecipeById, getRecipeById } from '../../actions';
import { motion } from 'framer-motion'
import Loader from '../Loader/Loader';
import { TfiAlarmClock } from 'react-icons/tfi'
import { VscPerson } from 'react-icons/vsc'
import { RiMentalHealthLine } from 'react-icons/ri'
import { MdFavoriteBorder } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { reactLocalStorage } from 'reactjs-localstorage';
import { useState } from 'react';

const Detail = () => {

  const [count, setCount] = useState(0)

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { id } = useParams();

  const dispatch = useDispatch()
  const recipe = useSelector((state) => state.recipeById)
  useEffect(() => {
    dispatch(getRecipeById(id))
  }, [])

  if (recipe.createdInDb) {
    recipe.diets = [recipe.diet]
  }

  useEffect(() => {
    return () => {
      dispatch(clearRecipeById())
    }
  }, [])

  let isFavorite = false
  if (reactLocalStorage.getObject('favorites').length) {
    isFavorite = reactLocalStorage.getObject('favorites').find(r => r == id)
  }

  const favoritesHandler = (id) => {
    if (!isFavorite) {
      if (!reactLocalStorage.getObject('favorites').length) reactLocalStorage.setObject('favorites', [id])
      else reactLocalStorage.setObject('favorites', [...reactLocalStorage.getObject('favorites'), id])
    } else {
      const newFavorites = reactLocalStorage.getObject('favorites').filter(r => r != id)
      reactLocalStorage.setObject('favorites', newFavorites)
    }
    setCount(count + 1)
  }

  return (
    <div className={s.container}>
      {
        Object.keys(recipe).length ?
          <motion.div className={s.detail}
            transition={{ delay: 0.2, duration: 0.5 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <div className={s.detailRow}>
              <div className={s.detailImg}>
                <img src={recipe.image} alt={recipe.name} />
              </div>
              <div className={s.detailWrapper}>
                <h1>{recipe.name}</h1>
                <div className={s.detailStats}>
                  <div>
                    <span><b>{recipe.readyInMinutes}</b> minutes <TfiAlarmClock size={'20px'}></TfiAlarmClock></span>
                  </div>
                  <div>
                    <span><b>{recipe.servings}</b> servings<VscPerson size={'20px'}></VscPerson></span>
                  </div>
                  <div>
                    <span><b>{recipe.healthScore}</b> Health Score<RiMentalHealthLine size={'20px'}></RiMentalHealthLine></span>
                  </div>
                </div>
                <p><b>Diet types:</b> {recipe.diets && recipe.diets.join(', ')}.</p>
                {isFavorite ?
                  <span className={s.saveRecipe} onClick={() => favoritesHandler(id)}>Remove from favorites <RxCross2 size={'20px'}></RxCross2></span> :
                  <span className={s.saveRecipe} onClick={() => favoritesHandler(id)}>Add to favorites <MdFavoriteBorder size={'20px'}></MdFavoriteBorder></span>
                }
              </div>
            </div>
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }} className={s.detailSummary}></p>
            <div className={s.hr}></div>
            <div className={s.detailSteps}>
              {
                recipe.steps ?
                  <div className={s.step}>
                    <p>{recipe.steps}</p>
                  </div> :
                  recipe.analyzedInstructions &&
                  recipe.analyzedInstructions[0] &&
                  recipe.analyzedInstructions[0].steps.map(step => {
                    return (
                      <div className={s.step} key={step.step}>
                        <p className={s.stepNum}>{step.number}</p>
                        <p className={s.stepInfo}>{step.step}</p>
                      </div>
                    )
                  })
              }
            </div>
            <div className={s.related}>
            </div>
          </motion.div> :
          <Loader></Loader>
      }
    </div>
  )
}

export default Detail