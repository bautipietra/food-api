const initialState = {
  recipes: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'GET_RECIPES':
      return { ...state, recipes: payload }

    default:
      return state
  }
}
