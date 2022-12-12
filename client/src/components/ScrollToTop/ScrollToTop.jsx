import React, { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import s from './ScrollToTop.module.scss'
import { motion } from 'framer-motion'

function ScrollToTop() {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) setScroll(true)
      else setScroll(false)
    })
  }, [])


  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return <>
    {
      scroll && (
        <motion.div
          transition={{ delay: 0.2, duration: 0.5 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <BsFillArrowUpCircleFill className={s.scrollToTop} size='50px' onClick={() => scrollToTop()}></BsFillArrowUpCircleFill>
        </motion.div>)
    }
  </>
}

export default ScrollToTop