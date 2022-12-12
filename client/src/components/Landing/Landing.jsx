import React from 'react'
import s from './Landing.module.scss'
import landing from '../../assets/landing.png'
import { CountUp } from 'count-up-es-react'
import { motion } from "framer-motion"
import SeeRecipesButton from '../Button/Button'
import { RiHeartAddLine } from 'react-icons/ri'
import { SlEnergy } from 'react-icons/sl'
import { TfiAlarmClock } from 'react-icons/tfi'
import immune from '../../assets/immune.svg'
import time from '../../assets/time.svg'
import energy from '../../assets/energy.svg'

function Landing() {
  return (
    <div className={s.container}>
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
      <div className={s.cards}>
        <motion.div className={s.card}
          transition={{ delay: 0.2, duration: 0.5 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <RiHeartAddLine size={'60px'}></RiHeartAddLine>
          <h4>Becomes Healthier</h4>
          <p>Immune will stronger if the body is healthier</p>
          <img src={immune} alt="" />
        </motion.div>
        <motion.div className={s.card}
          transition={{ delay: 0.2, duration: 0.5 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <TfiAlarmClock size={'60px'}></TfiAlarmClock>
          <h4>Save time</h4>
          <p>Time will no longer be an excuse to be unhealthy</p>
          <img src={time} alt="" />
        </motion.div>
        <motion.div className={s.card}
          transition={{ delay: 0.2, duration: 0.5 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <SlEnergy size={'60px'}></SlEnergy>
          <h4>Increase energy</h4>
          <p>Having enough energy can help you achieve a goal</p>
          <img src={energy} alt="" />
        </motion.div>
      </div>
    </div >
  )
}

export default Landing