import React from 'react'

export default class Test extends React.Component {
  componentDidMount () {
    const {store} = this.context
   }

  render () {
    const {store} = this.context
    console.log('TEST PROPS', store)
    return (
      <div>
        <h1>Test test 1 2 3</h1>
      </div>
    )
  }
}

Test.contextTypes = {
  store: React.PropTypes.object
}
