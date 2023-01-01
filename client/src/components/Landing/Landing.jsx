import React from 'react'
import s from './Landing.module.css'
import landing from '../../assets/landing.png'
import { CountUp } from 'count-up-es-react'
import { motion } from "framer-motion"
import Button from '../Button/Button'
import { RiHeartAddLine } from 'react-icons/ri'
import { SlEnergy } from 'react-icons/sl'
import { TfiAlarmClock } from 'react-icons/tfi'
import immune from '../../assets/immune.svg'
import time from '../../assets/time.svg'
import energy from '../../assets/energy.svg'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Landing() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={s.container}>
      <motion.div className={s.landing}
        transition={{ delay: 0.2, duration: 0.5 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
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
              Eating healthy is now easier with Tasty. Access thousands of recipes with a single click.
            </p>
            <Button text={'See recipes'} path={'/recipes?page=1'}></Button>
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
          <motion.img src={landing} alt="girl eating healthy" className='landing-img'
            transition={{ delay: 0.2, duration: 0.5 }}
            exit={{ opacity: 0 }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }} />
        </div>
      </motion.div>
      <div className={s.cards}>
        <motion.div className={s.card}
          transition={{ delay: 0.2, duration: 0.5 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <RiHeartAddLine size={'60px'}></RiHeartAddLine>
          <h4>Become healthier</h4>
          <p>Immunity will be stronger if the body is healthier</p>
          <img src={immune} alt="doctor" />
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
          <img src={time} alt="clock" />
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
          <img src={energy} alt="achieve a goal" />
        </motion.div>
      </div>
    </div >
  )
}

export default Landing