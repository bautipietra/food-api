import React from 'react'
import s from './Filters.module.css'
import { motion } from 'framer-motion'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Filters = ({ max, current, search }) => {

  let prev
  if (search) prev = `/recipes?page=${+ (current - 1) + ('&search=' + search)}`
  else prev = `/recipes?page=${+ (current - 1)}`
  let next
  if (search) next = `/recipes?page=${+ (current + 1) + ('&search=' + search)}`
  else next = `/recipes?page=${+ (current + 1)}`

  const disablePrev = current > 1 ? true : false
  const disableNext = current < max ? false : true

  const clickHandler = (e) => {
    e.preventDefault()
  }

  return (
    <motion.div className={s.container}
      transition={{ delay: 0.2, duration: 0.5 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}>
      <div className={s.filters}>
        <div className={s.filtersPagination}>
          <Link to={prev} className={!disablePrev && s.disable}><BsFillArrowLeftSquareFill size={'30px'}></BsFillArrowLeftSquareFill></Link>
          <Link to={next} className={disableNext && s.disable}><BsFillArrowRightSquareFill size={'30px'}></BsFillArrowRightSquareFill></Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Filters