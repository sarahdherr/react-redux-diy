import '../styling/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <p>Hello everyone!</p>
  </Provider>,
  document.getElementById('app')
)
