import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  kitten: require('./kittens').default,
})

export default rootReducer
