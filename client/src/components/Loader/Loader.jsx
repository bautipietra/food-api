import React from 'react'
import s from './Loader.module.css'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div className={s.ldsRing}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div></div><div></div><div></div><div></div>
    </motion.div>
  )
}

export default Loader