import connect from '../react-redux/connect'
import Kitten from '../components/Kitten'
import {stockKitten} from '../reducers/kittens'

const mapState = (state) => {
  return {
    kitten: state.kitten.selected,
    kittens: state.kitten.list
  }
}

const mapDispatch = (dispatch) => {
  return {
    select: (kitten) => dispatch(stockKitten(kitten))
  }
}

export default connect(mapState, mapDispatch)(Kitten)
