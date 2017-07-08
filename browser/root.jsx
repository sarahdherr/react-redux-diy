import React from 'react'
import {Router, Route, browserHistory, IndexRedirect} from 'react-router'
import {Provider} from 'react-redux'

import store from './store'

import Test from './components/Test'
// import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import AppContainer from './containers/AppContainer'

export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={AppContainer}>
        <Route path='/projects' component={Test} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/home' component={Home} />
        <IndexRedirect to='/about' />
        </Route>
      </Router>
    </Provider>
  )
}
