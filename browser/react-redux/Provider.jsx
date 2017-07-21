/*
WHAT DOES/IS PROVIDER DO?
- provider makes store a global variable for all children components
*/

import React from 'react'

export default class Provider extends React.Component {

  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return this.props.children
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
}
