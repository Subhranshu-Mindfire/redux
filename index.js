const redux = require('redux')
const createStore = redux.createStore

const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED = 'CAKE_ORDERED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'

function orderCake() {
  return {
    type: CAKE_ORDERED,
  }
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty
  }
}

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
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

const actions = bindActionCreators(
  { orderCake,orderIceCream },
  store.dispatch
)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderIceCream()
actions.orderIceCream()

unsubscribe()