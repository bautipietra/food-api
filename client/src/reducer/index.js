const initialState = {
  recipes: [],
  recipeById: {},
  savedRecipes: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'GET_RECIPES':
      return { ...state, recipes: payload }

    case 'GET_RECIPE_BY_ID':
      return { ...state, recipeById: payload }

    case 'CLEAR_RECIPE_BY_ID':
      return { ...state, recipeById: {} }

    default:
      return state
  }
}
