import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import Provider from './react-redux/Provider'

import store from './store'

import Test from './components/Test'
import Kitten from './containers/KittenContainer'
import AppContainer from './containers/AppContainer'
import {stockKitten, stockKittens} from './reducers/kittens'

import kittens from './dummyCats'

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
          <Route path='/kittens' component={Kitten} onEnter={loadKitten} />
        </Route>
      </Router>
    </Provider>
  )
}
