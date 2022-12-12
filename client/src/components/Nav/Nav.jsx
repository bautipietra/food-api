import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import s from './Nav.module.scss'
import SearchBar from '../SearchBar/SearchBar'
import { motion } from "framer-motion";
import Logo from '../Logo/Logo'

function Nav() {
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    if (menu) window.onscroll = function () { if (window.innerWidth < 800) window.scrollTo(0, 0); };
    else window.onscroll = function () { }
  }, [menu])

  return (
    <motion.div className={`${s.container}`}
      transition={{ delay: 0.4, duration: 0.5 }}
      exit={{ opacity: 0 }}
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}>
      <nav>
        <Logo color={'var(--primary-color)'}></Logo>
        <div className={`${s.menu} ${menu ? s.open : ''}`} onClick={() => setMenu(!menu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${s.navWrapper} ${menu ? '' : s.hidden}`}>
          <ul>
            <li><Link to={'/recipes'}>Recipes</Link></li>
            <li><Link to={'/favorites'}>Favorites</Link></li>
          </ul>
          <SearchBar></SearchBar>
          <Button text={'Create'} path={'/create'}></Button>
        </div>
      </nav>
    </motion.div>
  )
}

export default Nav