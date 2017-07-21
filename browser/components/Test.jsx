import React from 'react'

export default class Test extends React.Component {
  render () {
    const {store} = this.context
    console.log("PROPS STORE", store)
    return (
      <h1>🐶 Dogs are slobbery and smell</h1>
    )
  }
}

Test.contextTypes = {
  store: React.PropTypes.object
}
