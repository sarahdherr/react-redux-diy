import axios from 'axios'

function reducer (state = {}, action) {
  switch (action.type) {
    case SELECT_KITTEN:
      return action.kitten
  }
  return state
}

const SELECT_KITTEN = 'SELECT_KITTEN'
export const stockKitten = kitten => ({
  type: SELECT_KITTEN,
  kitten
})

export const fetchKitten = id =>
  dispatch =>
    axios.get(`/api/kittens/${id}`)
      .then(response => {
        dispatch(stockKitten(response.data))
      })
      .catch(err => console.error(err))

export default reducer
