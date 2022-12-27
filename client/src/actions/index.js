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