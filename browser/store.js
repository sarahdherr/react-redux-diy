import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const store = createStore(
  reducers,
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  )
)

export default store
