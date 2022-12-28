import React from 'react'
import s from './Create.module.css'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDiets } from '../../actions'

const Create = () => {

  const dispatch = useDispatch()
  const diets = useSelector((state) => state.diets)
  useEffect(() => {
    dispatch(getDiets())
  }, [])

  return (
    <div className={s.container}>
      <motion.div className={s.create}
        transition={{ delay: 0.2, duration: 0.5 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <h2>Create your own recipe</h2>
        <form>
          <div className={s.formWrapper}>
            <label htmlFor="title">Title</label>
            <input type="text" id='title' name='title' placeholder='Title' />
            <span className={s.error}></span>
          </div>
          <div className={s.formWrapper}>
            <label htmlFor="summary">Summary</label>
            <input type="text" id='summary' name='summary' placeholder='Summary' />
            <span className={s.error}></span>
          </div>
          <div className={s.formWrapper}>
            <label htmlFor="image">Image URL</label>
            <input type="text" id='image' name='image' placeholder='https://example.com/image.jpg' />
            <span className={s.error}></span>
          </div>
          <div className={s.formWrapper}>
            <label htmlFor="healthScore">Health score <span>(from 1 to 100)</span></label>
            <input type="number" min={'0'} max={'100'} id='healthScore' name='healthScore' placeholder='Health Score' />
            <span className={s.error}></span>
          </div>
          <div className={s.formWrapper}>
            <label htmlFor="dietType">Diet Type</label>
            <select name="dietType" id="dietType">
              <option value="null">Choose an option</option>
              {
                diets.map(d => <option value={d.name}>{d.name}</option>)
              }
            </select>
            <span className={s.error}></span>
          </div>
          <button>Create</button>
        </form>
      </motion.div>
    </div>
  )
}

export default Create