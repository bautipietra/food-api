import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducer'

const reducers = combineReducers({
  rootReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
