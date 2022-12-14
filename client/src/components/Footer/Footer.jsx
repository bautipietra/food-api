import React from 'react'
import s from './Footer.module.css'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <footer>
      <div className={s.footerContainer}>
        <Logo color='#fff'></Logo>
        <div className={s.wrapper}>
          <ul>
            <li><h6>About</h6></li>
            <li><Link to={{}}>About us</Link></li>
            <li><Link to={{}}>Features</Link></li>
            <li><Link to={{}}>News & Blog</Link></li>
          </ul>
          <ul>
            <li><h6>Movement</h6></li>
            <li><Link to={{}}>What is Tasty</Link></li>
            <li><Link to={{}}>Support Us</Link></li>
          </ul>
          <ul>
            <li><h6>Company</h6></li>
            <li><Link to={{}}>Why Tasty</Link></li>
            <li><Link to={{}}>Capital</Link></li>
            <li><Link to={{}}>Security</Link></li>
          </ul>
          <ul>
            <li><h6>Support</h6></li>
            <li><Link to={{}}>FAQs</Link></li>
            <li><Link to={{}}>Support Center</Link></li>
            <li><Link to={{}}>Contact Us</Link></li>
          </ul>
        </div>
        <p>
          Website made with 🤍 by <a href="https://www.linkedin.com/in/bautista-pietraroia/" target={'_blank'}>Bautista Pietraroia</a><br></br>
          Image by <a href="https://www.freepik.com/free-photo/beautiful-young-woman-eating-salad-black-background_1623570.htm#query=food%20girl&position=2&from_view=search&track=sph" target={'_blank'}>Nensuria</a> on Freepik
        </p>
      </div>
    </footer>
  )
}

export default Footer