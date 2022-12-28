import React, { useEffect } from 'react'
import s from './Filters.module.css'
import { motion } from 'framer-motion'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { getDiets } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

const Filters = ({ max, current, search, order, healthScore, dietType }) => {

  const dispatch = useDispatch()
  const diets = useSelector((state) => state.diets)
  useEffect(() => {
    dispatch(getDiets())
  }, [])

  /* Pagination */

  let prev = '/recipes?page=' + (current - 1)
  let next = '/recipes?page=' + (current + 1)
  if (search) {
    prev = prev + '&search=' + search
    next = next + '&search=' + search
  }
  if (order) {
    prev = prev + '&order=' + order
    next = next + '&order=' + order
  }
  if (healthScore) {
    prev = prev + '&healthScore=' + healthScore
    next = next + '&healthScore=' + healthScore
  }
  if (dietType) {
    prev = prev + '&dietType=' + dietType
    next = next + '&dietType=' + dietType
  }

  const disablePrev = current > 1 ? true : false
  const disableNext = current < max ? false : true

  /* Filters */

  const navigate = useNavigate();
  const applyHandler = () => {
    const orderV = document.querySelector('#alphabetical-order').value
    const healthScoreV = document.querySelector('#health-score').value
    const dietTypeV = document.querySelector('#diet-type').value
    let url = '/recipes?page=1'
    if (search) url = url + '&search=' + search
    if (orderV != 'null') url = url + '&order=' + orderV
    if (healthScoreV != 'null') url = url + '&healthScore=' + healthScoreV
    if (dietTypeV != 'null') url = url + '&dietType=' + dietTypeV
    navigate(url)
  }

  return (
    <motion.div className={s.container}
      transition={{ delay: 0.2, duration: 0.5 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}>
      <div className={s.filters}>
        <div className={s.filterSelect}>
          <div className={s.filter}>
            <label htmlFor="alphabetical-order">alphabetical order</label>
            <select name="alphabetical-order" id="alphabetical-order">
              <option value="null">Choose an option</option>
              <option value="asc">Asc. ↑</option>
              <option value="desc">Desc. ↓</option>
            </select>
          </div>
          <div className={s.filter}>
            <label htmlFor="health-score">Health Score</label>
            <select name="health-score" id="health-score">
              <option value="null">Choose an option</option>
              <option value="asc">Asc. ↑</option>
              <option value="desc">Desc. ↓</option>
            </select>
          </div>
          <div className={s.filter}>
            <label htmlFor="diet-type">Diet type</label>
            <select name="diet-type" id="diet-type">
              <option value="null">Choose an option</option>
              {
                diets.map(d => <option value={d.name}>{d.name}</option>)
              }
            </select>
          </div>
        </div>
        <button id={s.apply} onClick={() => applyHandler()}>Apply</button>
        <div className={s.filtersPagination}>
          <Link to={prev} className={!disablePrev ? s.disable : ''}><BsFillArrowLeftSquareFill size={'30px'}></BsFillArrowLeftSquareFill></Link>
          <Link to={next} className={disableNext ? s.disable : ''}><BsFillArrowRightSquareFill size={'30px'}></BsFillArrowRightSquareFill></Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Filters