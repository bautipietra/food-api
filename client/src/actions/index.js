import axios from 'axios'

export const getRecipes = () => {
  return async (dispatch) => {
    const json = await axios(`http://localhost:3001/recipes`)
    return dispatch({
      type: 'GET_RECIPES',
      payload: json.data
    })
  }
}

export const clearRecipes = () => {
  return async (dispatch) => {
    return dispatch({
      type: 'CLEAR_RECIPES',
    })
  }
}

export const getRecipeById = (id) => {
  return async (dispatch) => {
    const json = await axios(`http://localhost:3001/recipes/` + id)
    return dispatch({
      type: 'GET_RECIPE_BY_ID',
      payload: json.data
    })
  }
}

export const clearRecipeById = () => {
  return async (dispatch) => {
    return dispatch({
      type: 'CLEAR_RECIPE_BY_ID',
    })
  }
}

export const getDiets = () => {
  return async (dispatch) => {
    const json = await axios(`http://localhost:3001/diets`)
    return dispatch({
      type: 'GET_DIETS',
      payload: json.data
    })
  }
}