import axios from 'axios'

// constants
const SELECT_KITTEN = 'SELECT_KITTEN'
const STOCK_KITTENS = 'STOCK_KITTENS'

const initialState = {
  selected: {},
  list: []
}
// reducer
function reducer (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case SELECT_KITTEN:
      newState.selected = action.kitten
      break
    case STOCK_KITTENS:
      newState.list = action.kittens
      break
  }
  return newState
}

export const stockKitten = kitten => ({
  type: SELECT_KITTEN,
  kitten
})

export const stockKittens = kittens => ({
  type: STOCK_KITTENS,
  kittens
})

export default reducer
