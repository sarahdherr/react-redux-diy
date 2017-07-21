import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import Provider from './react-redux/Provider'

import store from './store'

import Test from './components/Test'
import KittenContainer from './containers/KittenContainer'
import AppContainer from './containers/AppContainer'

import kittens from './dummyCats'
import {stockKitten, stockKittens} from './reducers/kittens'

const loadKitten = (nextRouter) => {
  let randomKitten = kittens[ Math.floor(Math.random() * kittens.length) ]
  store.dispatch(stockKitten(randomKitten))
  store.dispatch(stockKittens(kittens))
}

export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={AppContainer} >
          <Route path='/test' component={Test} />
          <Route path='/kittens' component={KittenContainer} onEnter={loadKitten} />
        </Route>
      </Router>
    </Provider>
  )
}
