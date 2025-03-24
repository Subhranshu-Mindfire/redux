const redux = require('redux')

const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty
  }
}

const initialState = {
  numOfCakes: 10,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    default:
      return state
  }
}

