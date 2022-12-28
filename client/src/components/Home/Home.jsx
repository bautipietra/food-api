import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearRecipes, getRecipes } from '../../actions'
import Card from '../Card/Card'
import s from './Home.module.scss'
import { motion } from 'framer-motion'
import { useLocation, useSearchParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import Filters from '../Filters/Filters'
import { useState } from 'react'

const Home = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const dispatch = useDispatch()
  let allRecipes = useSelector((state) => state.recipes)
  useEffect(() => {
    dispatch(getRecipes())
  }, [])

  useEffect(() => {
    return dispatch(clearRecipes())
  }, [])

  /* Params */

  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')
  const name = searchParams.get('search')

  const order = searchParams.get('order')
  const healthScore = searchParams.get('healthScore')
  const dietType = searchParams.get('dietType')

  /* Filters */

  if (order || healthScore || dietType) {

    if (dietType) {
      switch (dietType) {
        case 'lacto ovo vegetarian':
          allRecipes = allRecipes.filter(r => r.diets.includes('lacto ovo vegetarian'))
          break

        case 'gluten free':
          allRecipes = allRecipes.filter(r => r.diets.includes('gluten free'))
          break

        case 'dairy free':
          allRecipes = allRecipes.filter(r => r.diets.includes('dairy free'))
          break

        case 'paleolithic':
          allRecipes = allRecipes.filter(r => r.diets.includes('paleolithic'))
          break

        case 'primal':
          allRecipes = allRecipes.filter(r => r.diets.includes('primal'))
          break

        case 'pescatarian':
          allRecipes = allRecipes.filter(r => r.diets.includes('pescatarian'))
          break

        case 'ketogenic':
          allRecipes = allRecipes.filter(r => r.diets.includes('ketogenic'))
          break

        case 'vegan':
          allRecipes = allRecipes.filter(r => r.diets.includes('vegan'))
          break

        case 'whole 30':
          allRecipes = allRecipes.filter(r => r.diets.includes('whole 30'))
          break

        case 'dairy free':
          allRecipes = allRecipes.filter(r => r.diets.includes('dairy free'))
          break

        case 'fodmap friendly':
          allRecipes = allRecipes.filter(r => r.diets.includes('fodmap friendly'))
          break

        default:
          break
      }
    }

    if (healthScore) {
      if (healthScore == 'asc') {
        allRecipes.sort((a, b) => {
          if (a.healthScore < b.healthScore) {
            return -1;
          }
          if (a.healthScore > b.healthScore) {
            return 1;
          }
          return 0;
        })
      }
      else if (healthScore == 'desc') {
        allRecipes.sort((a, b) => {
          if (a.healthScore < b.healthScore) {
            return 1;
          }
          if (a.healthScore > b.healthScore) {
            return -1;
          }
          return 0;
        })
      }
    }

    if (order) {
      if (order == 'asc') {
        allRecipes.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
      }
      else if (order == 'desc') {
        allRecipes.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        })
      }
    }
  }

  /* Pagination */

  let searchRecipes
  if (name) searchRecipes = allRecipes.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()))
  else searchRecipes = allRecipes
  const pageRecipes = searchRecipes.slice(page * 9 - 9, page * 9)
  const max = Math.ceil(searchRecipes.length / 9)

  return (
    <motion.div className={s.flex}
      transition={{ delay: 0.2, duration: 0.5 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}>
      <Filters max={max} current={Number(page)} search={name} order={order} healthScore={healthScore} dietType={dietType}></Filters>
      <div className={s.container}>
        {
          pageRecipes.length ?
            <motion.div className={s.containerCards}
              transition={{ delay: 0.2, duration: 0.5 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}>
              {
                pageRecipes.map(rec => <Card
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
            </motion.div> :
            <Loader></Loader>
        }
      </div>
    </motion.div>
  )
}

export default Home