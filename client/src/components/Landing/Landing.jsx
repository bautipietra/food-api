import React from 'react'
import s from './Landing.module.scss'
import landing from '../../assets/landing.png'
import { CountUp } from 'count-up-es-react';
import { motion } from "framer-motion";
import SeeRecipesButton from '../Button/Button';

function Landing() {
  return (
    <motion.div className={s.container}>
      <div className={s.landing}>
        <div className={s.landingWrapper}>
          <motion.div className={s.landingContent}
            transition={{ delay: 0.2, duration: 0.5 }}
            exit={{ opacity: 0 }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}>
            <h1>
              Changing your <span>eating</span> habits
            </h1>
            <p>
              Eating healthy is now easier with tasty, access thousands of recipes with a single click.
            </p>
            <SeeRecipesButton text={'See recipes'} path={'/recipes'}></SeeRecipesButton>
            <div className={s.landingCounters}>
              <div>
                <span>+<CountUp start={0} end={5000} duration={3000} /></span>
                <p>Recipes</p>
              </div>
              <div>
                <span>+<CountUp start={0} end={10} duration={5000} /></span>
                <p>Diet types</p>
              </div>
              <div>
                <span>+<CountUp start={0} end={2600} duration={3000} /></span>
                <p>Ingredients</p>
              </div>
            </div>
          </motion.div>
          <motion.img src={landing} alt="" className='landing-img'
            transition={{ delay: 0.2, duration: 0.5 }}
            exit={{ opacity: 0 }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }} />
        </div>
      </div>
    </motion.div >
  )
}

export default Landing