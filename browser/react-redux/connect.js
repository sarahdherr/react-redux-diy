/*
WHAT DOES CONNECT DO?
- It subscribes and unsubscribes to the store
- Returns a function that has an object of props to pass down to the component it is invoked with.
  - This function returns function as a Component
*/

// connect(mapState, mapProps)(ComponentToWrap)
//
// const mapState = (state) => {
//   return {
//     kitten: state.kitten.selected,
//     kittens: state.kitten.list
//   }
// }
//
// const mapDispatch = (dispatch) => {
//   return {
//     select: (kitten) => dispatch(stockKitten(kitten))
//   }
// }

import React from 'react'

export default function connect (mapState, mapDispatch) {
  return function (ComponentToWrap) {
    class ConnectHOC extends React.Component {
      constructor (props, context) {
        super(props)
        this.store = context.store
        this.state = {}
      }
      componentDidMount () {
        this.unsub = this.store.subscribe(() => this.setState(this.store.getState()))
      }
      componentWillUnmount () {
        this.unsub()
      }
      render () {
        const mapProps = Object.assign({}, mapState(this.store.getState()), mapDispatch(this.store.dispatch))
        return React.cloneElement(<ComponentToWrap />, mapProps)
      }
    }
    ConnectHOC.contextTypes = {
      store: React.PropTypes.object
    }
    return ConnectHOC
  }
}
