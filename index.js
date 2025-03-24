const redux = require('redux')
const createStore = redux.createStore

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

const store = createStore(reducer)
console.log('Initial State ', store.getState())

const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()