import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../../actions'
import Card from '../Card/Card'
import s from './Home.module.scss'

const Home = () => {

  const dispatch = useDispatch()
  const allRecipes = useSelector((state) => state.recipes)

  useEffect(() => {
    dispatch(getRecipes())
  }, [])


  return (
    <div>
      <div className={s.container}>
        <div className={s.containerCards}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <div>
        {
          //allRecipes.map(rec => <p>{rec.license}</p>)
        }
      </div>
    </div>
  )
}

export default Home