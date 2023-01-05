import React from 'react'
import s from './Create.module.css'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDiets, getRecipes } from '../../actions'
import axios from 'axios'

const Create = () => {

  const dispatch = useDispatch()
  const diets = useSelector((state) => state.diets)
  const recipes = useSelector((state) => state.recipes)
  useEffect(() => {
    dispatch(getDiets())
    dispatch(getRecipes())
  }, [])

  let titleValue
  let titleError = true
  const titleHandler = async (e) => {
    const error = document.querySelector('#titleError')
    const exist = await recipes.find(r => r.name == e.target.value)
    if (e.target.value.length == 0) {
      error.textContent = ''
      titleError = true
    }
    else if (e.target.value.length < 3) {
      error.textContent = 'The title must have at least 3 characters'
      titleError = true
    }
    else if (!isNaN(e.target.value)) {
      error.textContent = 'The title must have letters'
      titleError = true
    }
    else if (e.target.value.length > 100) {
      error.textContent = 'The title must have less than 100 characters'
      titleError = true
    }
    else if (exist) {
      error.textContent = 'This recipe already exists'
      titleError = true
    }
    else {
      error.textContent = ''
      titleError = false
      titleValue = e.target.value
    }
  }

  let summaryValue
  let summaryError = true
  const summaryHandler = (e) => {
    const error = document.querySelector('#summaryError')
    if (e.target.value.length == 0) {
      error.textContent = ''
      summaryError = true
    }
    else if (e.target.value.length < 100) {
      error.textContent = 'The summary must have at least 100 characters'
      summaryError = true
    }
    else if (!isNaN(e.target.value)) {
      error.textContent = 'The summary must have letters'
      titleError = true
    }
    else if (e.target.value.length > 1000) {
      error.textContent = 'The summary must have less than 1000 characters'
      summaryError = true
    }
    else {
      error.textContent = ''
      summaryError = false
      summaryValue = e.target.value
    }
  }

  let stepsValue
  let stepsError = true
  const stepsHandler = (e) => {
    const error = document.querySelector('#stepsError')
    if (e.target.value.length == 0) {
      error.textContent = ''
      stepsError = true
    }
    else if (e.target.value.length < 100) {
      error.textContent = 'The steps must have at least 100 characters'
      stepsError = true
    }
    else if (!isNaN(e.target.value)) {
      error.textContent = 'The steps must have letters'
      titleError = true
    }
    else if (e.target.value.length > 1000) {
      error.textContent = 'The steps must have less than 1000 characters'
      stepsError = true
    }
    else {
      error.textContent = ''
      stepsError = false
      stepsValue = e.target.value
    }
  }

  let healthValue
  let healthError = true
  const healthHandler = (e) => {
    const error = document.querySelector('#healthError')
    if (e.target.value.length == 0) {
      error.textContent = ''
      healthError = true
    }
    else if (isNaN(e.target.value)) {
      error.textContent = 'The health score must be a number'
      healthError = true
    }
    else if (e.target.value < 1) {
      error.textContent = 'The minimum health score is 1'
      healthError = true
    }
    else if (e.target.value > 100) {
      error.textContent = 'The maximum health score is 100'
      healthError = true
    }
    else {
      error.textContent = ''
      healthError = false
      healthValue = e.target.value
    }
  }

  let preparationValue
  let preparationError = true
  const preparationHandler = (e) => {
    const error = document.querySelector('#preparationError')
    if (e.target.value.length == 0) {
      error.textContent = ''
      preparationError = true
    }
    else if (e.target.value.length > 10) {
      error.textContent = 'Preparation time must be less than 10 digits'
      preparationError = true
    }
    else if (isNaN(e.target.value)) {
      error.textContent = 'Preparation time must be a number'
      preparationError = true
    }
    else if (e.target.value < 1) {
      error.textContent = 'The minimum preparation time score is 1'
      preparationError = true
    }
    else {
      error.textContent = ''
      preparationError = false
      preparationValue = e.target.value
    }
  }

  let servingsValue
  let servingsError = true
  const servingsHandler = (e) => {
    const error = document.querySelector('#servingsError')
    if (e.target.value.length == 0) {
      error.textContent = ''
      servingsError = true
    }
    else if (isNaN(e.target.value)) {
      error.textContent = 'Servings must be a number'
      servingsError = true
    }
    else if (e.target.value < 1 || e.target.value > 12) {
      error.textContent = 'Servings must be a number between 1 and 12'
      servingsError = true
    }
    else {
      error.textContent = ''
      servingsError = false
      servingsValue = e.target.value
    }
  }

  let dietsValue
  let dietsError = true
  const dietsHandler = (e) => {
    const error = document.querySelector('#dietsError')
    if (e.target.value.length == 0) {
      error.textContent = 'You have to select an option'
      dietsError = true
    }
    else if (e.target.value == 'null') {
      error.textContent = 'You have to select an option'
      dietsError = true
    }
    else if (!diets.find(d => d.name == e.target.value)) {
      error.textContent = 'You have to select one of the preselected options'
      dietsError = true
    }
    else {
      error.textContent = ''
      dietsError = false
      dietsValue = e.target.value
    }
  }

  let imageValue
  let imageError = true
  const imageHandler = (e) => {
    const error = document.querySelector('#imageError')
    let url
    try {
      url = new URL(e.target.value)
    } catch (error) {
    }
    if (e.target.value.length == 0) {
      error.textContent = ''
      imageError = true
    }
    else if (!url) {
      error.textContent = 'Image must be a valid link'
      imageError = true
    }
    else if (!e.target.value.toLowerCase().includes('.jpg') && !e.target.value.toLowerCase().includes('.png') && !e.target.value.toLowerCase().includes('.svg') && !e.target.value.toLowerCase().includes('.webp') && !e.target.value.toLowerCase().includes('jpeg')) {
      error.textContent = 'The link must be an image'
      imageError = true
    }
    else {
      error.textContent = ''
      imageError = false
      imageValue = e.target.value
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (!titleError && !summaryError && !stepsError && !imageError && !healthError && !preparationError && !servingsError && !dietsError) {
      axios.post('https://tasty-recipes-app-production.up.railway.app/recipes', {
        name: titleValue,
        summary: summaryValue,
        image: imageValue,
        healthScore: healthValue,
        readyInMinutes: preparationValue,
        servings: servingsValue,
        steps: stepsValue,
        diet: dietsValue
      })
      alert('The recipe was created successfully')
    }
  }

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
            <label htmlFor="title">Title *</label>
            <input type="title" id='title' name='title' placeholder='Title' onChange={(e) => titleHandler(e)} />
            <span className={s.error} id={'titleError'}></span>
          </div>
          <div className={s.formWrapper}>
            <label htmlFor="summary">Summary *</label>
            <input type="summary" id='summary' name='summary' placeholder='Summary' onChange={(e) => summaryHandler(e)} />
            <span className={s.error} id={'summaryError'}></span>
          </div>
          <div className={s.formWrapper}>
            <label htmlFor="steps">Steps *</label>
            <input type="steps" id='steps' name='steps' placeholder='Steps' onChange={(e) => stepsHandler(e)} />
            <span className={s.error} id={'stepsError'}></span>
          </div>
          <div className={s.formWrapper}>
            <label htmlFor="image">Image URL *</label>
            <input type="link" id='image' name='image' placeholder='https://example.com/image.jpg' onChange={(e) => imageHandler(e)} />
            <span className={s.error} id={'imageError'}></span>
          </div>
          <div className={s.formWrapper}>
            <label htmlFor="healthScore">Health score <span>(from 1 to 100)</span> *</label>
            <input type="number" min={'0'} max={'100'} id='healthScore' name='healthScore' placeholder='Health Score' onChange={(e) => healthHandler(e)} />
            <span className={s.error} id={'healthError'}></span>
          </div>
          <div className={s.formWrapper}>
            <label htmlFor="preparationTime">Preparation time <span>(in minutes)</span> *</label>
            <input type="number" min={'0'} max={'100'} id='preparationTime' name='preparationTime' placeholder='Preparation time' onChange={(e) => preparationHandler(e)} />
            <span className={s.error} id={'preparationError'}></span>
          </div>
          <div className={s.formWrapper}>
            <label htmlFor="servings">Servings <span>(from 1 to 12)</span> *</label>
            <input type="number" min={'0'} max={'10'} id='servings' name='servings' placeholder='servings' onChange={(e) => servingsHandler(e)} />
            <span className={s.error} id={'servingsError'}></span>
          </div>
          <div className={s.formWrapper}>
            <label htmlFor="dietType">Diet Type *</label>
            <select name="dietType" id="dietType" onChange={(e) => dietsHandler(e)}>
              <option value="null">Choose an option</option>
              {
                diets.map(d => <option value={d.name}>{d.name}</option>)
              }
            </select>
            <span className={s.error} id={'dietsError'}></span>
          </div>
          <button onClick={(e) => submitHandler(e)}>Create</button>
        </form>
      </motion.div>
    </div>
  )
}

export default Create