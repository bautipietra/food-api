const initialState = {
  recipes: [],
  recipeById: {},
  diets: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'GET_RECIPES':
      return { ...state, recipes: payload }

    case 'CLEAR_RECIPES':
      return { ...state, recipes: [] }

    case 'GET_RECIPE_BY_ID':
      return { ...state, recipeById: payload }

    case 'CLEAR_RECIPE_BY_ID':
      return { ...state, recipeById: {} }

    case 'GET_DIETS':
      return { ...state, diets: payload }

    default:
      return state
  }
}
