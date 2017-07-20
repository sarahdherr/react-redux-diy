import React from 'react'

// export function createProvider (storeKey = 'store') {
  class Provider extends React.Component {
    getChildContext () {
      return {
        store: this.props.store // This corresponds to the `store` passed in as a prop
      }
    }
    render () {
      return this.props.children
    }
  }

  Provider.childContextTypes = {
    store: React.PropTypes.object
  }

  // return Provider
// }

export default Provider
