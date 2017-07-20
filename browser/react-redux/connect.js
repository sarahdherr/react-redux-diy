import React from 'react'

const connect = (mapState, mapDispatch) => {
  // returns a function that takes a component
  return function (WrapComponent) {
    // returns a component
    class ConnectHOC extends React.Component {
      constructor (props) {
        super(props)
        this.state = {}
      }
      componentDidMount () {
        const {store} = this.context
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
      }
      componentWillUnmount () {
        this.unsubscribe()
      }
      render () {
        const {store} = this.context
        const mapProps = Object.assign({}, mapState(store.getState()), mapDispatch(store.dispatch))

        return React.cloneElement(<WrapComponent />, mapProps)
      }
    }
    ConnectHOC.contextTypes = {
      store: React.PropTypes.object
    }
    return ConnectHOC
  }
}

export default connect
