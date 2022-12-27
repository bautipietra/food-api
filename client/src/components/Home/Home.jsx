import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../../actions'
import Card from '../Card/Card'
import s from './Home.module.scss'
import { motion } from 'framer-motion'
import { useLocation, useSearchParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import Filters from '../Filters/Filters'

const Home = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const dispatch = useDispatch()
  const allRecipes = useSelector((state) => state.recipes)
  useEffect(() => {
    dispatch(getRecipes())
  }, [])

  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')
  const name = searchParams.get('search')

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
      <Filters max={max} current={Number(page)} search={name}></Filters>
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